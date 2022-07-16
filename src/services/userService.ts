import bcrypt from 'bcrypt';

import { Users } from "@prisma/client";

import * as userRepository from "../repositories/userRepository.js"

export type CreateUser = Omit<Users, "id">;

export async function signUp(createUser: CreateUser) {
    const { email, password } = createUser;

    const existingUser = await userRepository.findByEmail(email);
    if(existingUser) throw { type: "conflict", message: "Email has already registered" }

    const hashedPassword = bcrypt.hashSync(password, 10);
    
   await userRepository.createUser({email, password: hashedPassword});
}

export async function signIn(user: CreateUser) {
    const { email, password } = user
}