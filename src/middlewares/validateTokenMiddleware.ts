import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import { findById } from "../repositories/userRepository.js";

export async function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {

    const authorization = req.headers["authorization"];
    if(!authorization) throw { type: "unauthorized", message: "Invalid token" }

    const token = authorization?.replace('Bearer ', '').trim();
    if(!token) throw { type: "unauthorized", message: "Missing token" }

    try {

        const secretKey = process.env.JWT_SECRET;
        const userToken = jwt.verify(token, secretKey);

        const { userId } = userToken as { userId: number };
        const user = await findById(userId);
        if(!user) throw { type: "unauthorized", message: "Invalid token" }

        res.locals.userToken = userToken;     
        next();
    } catch {
        throw { type: "unauthorized", message: "Invalid token" }
    }

}