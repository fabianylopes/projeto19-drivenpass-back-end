import { prisma } from "../config/db.js";
import { Credentials } from "@prisma/client";

export type CreateCredential = Omit<Credentials, "id">;

export async function create(createCredential: CreateCredential) {
    return prisma.credentials.create({
        data: createCredential,
    });
}

export async function findByTitle(title: string) {
    return prisma.credentials.findFirst({
        where: {
            title,
        }
    });
}

export async function findAll(userId: number) {
    return prisma.credentials.findMany({
        where: {
            userId,
        },
        select:{
            title: true,
        } 
    })
}

export async function findById(id: number) {
    return prisma.credentials.findUnique({
        where: {
            id,
        }
    });
}

export async function deleteById(id: number) {
    return prisma.credentials.delete({
        where: {
            id,
        }
    });
}