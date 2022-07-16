import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { findById } from "../repositories/userRepository.js";
dotenv.config();

export async function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    
    const authorization = req.headers["authorization"];
    if(!authorization) throw { type: "unauthorized", message: "Invalid token" }

    const token = authorization?.replace('Bearer ', '').trim();
    if(!token) throw { type: "unauthorized", message: "Missing token" }

    try {

    const secretKey = process.env.JWT_SECRET;
    const { userId } = jwt.verify(token, secretKey) as { userId: number };

    const user = await findById(userId);
    if(!user) throw { type: "unauthorized", message: "Invalid token" }

        res.locals.user = user;
        
        next();
    } catch {
        throw { type: "unauthorized", message: "Invalid token" }
    }

}