import { PrismaClient, User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

declare global {
    type Middleware = (req: Request, res: Response, next: NextFunction) => void
    type MiddlewareBuilder = (db: PrismaClient) => Middleware
    type JwtPayload = {userId : number}

    //express
    declare namespace Express {
        interface Request {
            user?: User
            jwtPayload?: JwtPayload
        }
    }
}