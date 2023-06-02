import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";
import {get} from "lodash"

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = (req.headers.authorization || "").replace(
    /^Bearer\s/,
    ""
  )
  
  if (!accessToken) {
    return next();
  }

  const decoded = verifyJwt<{_id: string}>(accessToken, "aTPK");
  
  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
};

export default deserializeUser;