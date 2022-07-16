import { prisma } from "../config/db.js";
import { CreateUser } from "../services/userService.js";

export async function createUser(createUser: CreateUser) {
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