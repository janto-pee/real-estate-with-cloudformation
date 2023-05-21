import { NextFunction, Request, Response } from "express";

export async function requireUser(req: Request, res: Response, next: NextFunction) {
    const user = res.locals.user
    console.log(user)
    if(!user){ return res.sendStatus(403).json({data: "unable to set user"})}
    return next()
}