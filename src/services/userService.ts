import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

import { CreateUser } from "../repositories/userRepository.js";
import * as userRepository from "../repositories/userRepository.js"

export async function signUp(createUser: CreateUser) {
    const { email, password } = createUser;
    
    const existingUser = await userRepository.findByEmail(email);
    if(existingUser) throw { type: "conflict", message: "Email has already been registered" }

    const hashedPassword = bcrypt.hashSync(password, 10);
    
   await userRepository.createUser({email, password: hashedPassword});
}

export async function signIn(userData: CreateUser) {
    const { email, password } = userData;

    const user = await userRepository.findByEmail(email);
    if(!user) throw { type: "unauthorized", message: "Invalid data" }

    const rightPassword = bcrypt.compareSync(password, user.password);
    if(!rightPassword) throw { type: "unauthorized", message: "Invalid password" }

    const secretKey = process.env.JWT_SECRET;
    const token = jwt.sign({ userId: user.id }, secretKey);

    return token;
}