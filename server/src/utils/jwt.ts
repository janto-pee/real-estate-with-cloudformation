import Jwt from "jsonwebtoken";
import config from "config";

export function signJwt(
  object: Object,
  keyName: "aTPrK" | "rTPrK" | "awsEmailSign",
  option: Jwt.SignOptions
) {
  const signInKey = Buffer.from(config.get<string>(keyName), "base64").toString(
    "ascii"
  );
  return Jwt.sign(object, signInKey, {
    ...(option && option),
    algorithm: "RS256",
  });
}
export function verifyJwt<T>(
  token: string,
  keyName: "aTPK" | "rTPK" | "awsEmailVerify"
): T| null {
  const signInKey = Buffer.from(config.get<string>(keyName), "base64").toString(
    "ascii"
  );
  try {
    const decoded = Jwt.verify(token, signInKey) as T;
    return decoded
    // return { valid: true, expired: false, decoded };
  } catch (error: any) {
    return null
  }
}
