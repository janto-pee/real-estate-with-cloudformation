import express, { Request, Response } from "express";
import {
  allUser,
  createUser,
  findUserByEmail,
  findUserById,
  findUserByUsername,
  updateUser,
} from "../service/user.service";
import { signJwt, verifyJwt } from "../utils/jwt";
import { createSession, findSession } from "../service/session.service";
import { nanoid } from "nanoid";
import {AWSSES} from "../utils/configurations"


import {
  CreateUserInput,
  VerifyUserInput,
  accessForgotPasswordInput,
  forgotPasswordInput,
  publicProfileInput,
  updatePasswordInput,
  updateProfileInput,
} from "../schema/user.schema";
import sendEmail from "../utils/email";
import config from "config";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;
  try {
    const { username, firstname, email } = await createUser(body);

    const newUserToJwt = signJwt(
      { username, firstname, email },
      "awsEmailSign",
      { expiresIn: "1h" }
    );

    const clientURL = config.get<string>("CLIENT_URL");
    const replyTo = config.get<string>("REPLY_TO");

    AWSSES.sendEmail(
      sendEmail(
        email,
        `
        <p>Please click the link below to activate your account.</p>
        <a href="${clientURL}/api/verify/${newUserToJwt}">Activate my account</a>
        `,
        replyTo,
        "Activate your acount"
      ),
      (err, data) => {
        if (err) {
          console.log(err);
          return res.json({ ok: false });
        } else {
          console.log(data);
          return res.json({ ok: true });
        }
      }
    );

    return res.status(200).json({ data: newUserToJwt });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).send("Account already exists");
    }
    console.log(error);
    return res.status(400).send(error);
  }
}

export async function verifyUserHandler(
  req: Request<VerifyUserInput>,
  res: Response
) {
  const { emailverify } = req.params;
  const decoded = verifyJwt<{
    email: string;
    firstname: string;
    username: string;
  }>(emailverify, "awsEmailVerify");

  if (!decoded || decoded == null) {
    return res.status(400).send("unable to verify user");
  }
  console.log(decoded);
  try {
    const user = await findUserByEmail(decoded.email);
    if (!user) {
      return res.status(400).send("unable to verify user");
    }
    if (user.verified) {
      return res.status(400).send("user already verified");
    }
    if (
      user.firstname === decoded.firstname &&
      user.username === decoded.username
    ) {
      user.verified = true;
      user.save();
      return res.status(200).json(`User is now verified`);
    }
  } catch (error: any) {
    console.log(error.message);
    return res.status(400).send(error);
  }
}

export async function forgotPassword(
  req: Request<{}, {}, forgotPasswordInput>,
  res: Response
) {
  try {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: "user not found" });
    }
    if (!user.verified) {
      return res.status(400).json({ msg: "please verify your account first" });
    }
    const resetCode = nanoid();
    user.passwordResetCode = resetCode;
    await user.save();
    // aws message
    const message = signJwt({ resetCode, user: user.email }, "awsEmailSign", {
      expiresIn: "1h",
    });
    const messageUrl = `http://localhost:1337/api/user/accessaccount/${message}`;
    // aws
    res.status(200).json({ data: messageUrl });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ data: error.message });
  }
}

export async function accessForgotPassword(
  req: Request<accessForgotPasswordInput>,
  res: Response
) {
  try {
    const { accesscode } = req.params;
    const userAgent = req.get("userAgent");
    const decode = verifyJwt<{ resetCode: string; user: string }>(
      accesscode,
      "awsEmailVerify"
    );
    if (!decode) {
      return res.status(400).send("unable to reset your password");
    }
    const userfind = await findUserByEmail(decode.user);
    if (!userfind) {
      return res.status(400).send("email not correct");
    }
    if (userfind.passwordResetCode == decode.resetCode) {
      const session = await createSession({
        user: userfind._id,
        useragent: userAgent,
      });
      const accessToken = signJwt({ ...session }, "aTPrK", { expiresIn: "1h" });
      const refreshToken = signJwt({ ...session }, "rTPrK", {
        expiresIn: "1y",
      });
      userfind.passwordResetCode = "";
      console.log(session);
      const response = { accessToken, refreshToken };
      console.log(userfind);
      return res.status(200).json({ data: response });
    }
  } catch (error: any) {
    res.status(400).json({ data: error.message });
  }
}

export async function getCurrentUser(req: Request, res: Response) {
  try {
    console.log("get user controller .....");
    const user = res.locals.user;
    console.log(user);
    return res.status(200).json({ data: user });
  } catch (error: any) {
    res.status(400).json({ data: error.message });
  }
}

export async function publicProfile(
  req: Request<publicProfileInput>,
  res: Response
) {
  try {
    const { username } = req.params;
    console.log(username);
    const user = await findUserByUsername(username);
    return res.status(200).json({ data: user });
  } catch (error: any) {
    res.status(400).json({ data: error.message });
  }
}

export async function updatePasswordHandler(
  req: Request<{}, {}, updatePasswordInput>,
  res: Response
) {
  try {
    const userId = res.locals.user._id;
    const { oldpassword, password } = req.body;
    if (!password) {
      return res.status(400).send("new password field empty");
    }
    // const user = await findUserById(userId);
    const user = await findUserById(userId);
    if (!user) {
      return res.status(400).send(`unable to reset password`);
    }
    console.log(user);
    const isValid = await user.comparePassword(oldpassword);
    if (!isValid) {
      return res.status(400).send(`password incorrect`);
    }

    const updatedpassword = await updateUser(
      { _id: userId },
      { password: password },
      { new: true }
    );
    return res.status(200).json({ data: updatedpassword });
  } catch (error: any) {
    res.status(400).json({ data: error.message });
  }
}

export async function updateProfile(
  req: Request<{}, {}, updateProfileInput>,
  res: Response
) {
  try {
    const userId = res.locals.user._id;
    // console.log(userId);
    const update = req.body;
    const user = await findUserById(userId);
    if (!user) {
      return res.status(400).send(`unable to reset password`);
    }

    const updateduser = await updateUser({ _id: userId }, update, {
      new: true,
    });
    return res.status(200).json({ data: updateduser });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ data: error.message });
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  try {
    const users = await allUser();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(400).json({ data: error });
  }
}

// export async function getAllCourseHandler(req: Request, res: Response) {
//   let page =
//     typeof req.query.page !== "undefined" ? Number(req.query.page) - 1 : 0;
//   let limit =
//     typeof req.query.lmino !== "undefined" ? Number(req.query.lmino) : 5;
//   const user = res.locals.user;
//   if (!user) {
//     return res.status(401).send("unauthorised user");
//   }

//   try {
//     const Course = await getAllCourse(page, limit);
//     const total = await CourseModel.countDocuments();
//     const response = {
//       error: false,
//       total,
//       "courses displayed": limit,
//       page: page + 1,
//       Course,
//     };
//     return res.status(200).send(response);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// }