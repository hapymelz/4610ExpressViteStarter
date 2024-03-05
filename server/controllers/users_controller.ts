import { Router } from "express";
import * as bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/authentication";

export const buildUsersController = (db: PrismaClient) => {
    const router = Router();

    

    //creating data
    router.post("/users", async (req, res) => {
        const user = await db.user.create({
        data: {
            email: req.body.email,
            password_hash: bcrypt.hashSync(req.body.password),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            profile: {
            create: {},
            }
        }
        })
        const token = jwt.sign({
        userId: user.id,
        }, process.env.ENCRYPTION_KEY as string)
        
    res.json({user, token});
    })

    
    router.get("/me", authMiddleware(db), async (req, res) => {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
        res.status(401).json({error: "not authorized"});
        return;
        }
        try {
        const payload = jwt.verify(token, process.env.ENCRYPTION_KEY as string) as JwtPayload
        //PRISMA IS OUR MODEL LAYER
        const user = await db.user.findUnique({
            where: {
            id: payload.userId
            }
        })

        // VIEW
            res.json({user});
        } catch (e) {
            res.status(401).json({error: "not authorized"});
            return;
        }
    })

    return router
}