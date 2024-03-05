import { Router } from "express";
import * as bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export const buildSessionsController = (db: PrismaClient) => {
    const router = Router();


    router.post("/", async (req, res) => {
        const user = await db.user.findUnique({
          where: {
            email: req.body.email
          }
        });
      
        if (user && bcrypt.compareSync(req.body.password, user.password_hash)) {
          //user provided correct email and password, sign user in
          const token = jwt.sign({
            userId: user.id,
          }, process.env.ENCRYPTION_KEY as string)
          res.json({ token })
          
      
        } else {
          res.status(404).json({error: "Invalid Email or Password"})
        }
      })

      return router
}