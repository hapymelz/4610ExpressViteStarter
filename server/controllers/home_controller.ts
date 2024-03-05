import { Router } from "express";
import * as bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

export const buildHomeController = (db: PrismaClient) => {
    const router = Router();


    router.get("/", (req, res) => {
        res.render('index', {
            assetUrl: process.env.ASSET_URL,
            layout: false
        });
    });

      return router
}