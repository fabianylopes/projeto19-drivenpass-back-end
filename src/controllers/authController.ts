import { Request, Response } from "express";
import bcrypt from 'bcrypt';

export async function createUser(req: Request, res: Response){
    const { email, password } = req.body;

    const passwordHashed = bcrypt.hashSync(password, 10);
}