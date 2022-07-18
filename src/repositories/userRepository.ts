import { Users } from "@prisma/client";
import { prisma } from "../config/db.js";

export type CreateUser = Omit<Users, "id">;

export async function createUser(createUser: CreateUser) {
    console.log('repository')
    return prisma.users.create({
        data: createUser,
    });
}

export async function findByEmail(email: string){
    return prisma.users.findUnique({
        where: {
            email,
        }
    });
}

export async function findById(id: number) {
    return prisma.users.findUnique({
        where : {
            id,
        }
    });
}