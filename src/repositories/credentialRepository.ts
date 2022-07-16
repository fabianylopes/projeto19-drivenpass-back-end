import { prisma } from "../config/db.js";
import { CreateCredential } from "../services/credentialService.js";

export async function create(createCredential: CreateCredential) {
    return prisma.credentials.create({
        data: createCredential,
    });
}

export async function findByTitle(title: string) {
    return prisma.credentials.findUnique({
        where: {
            title,
        }
    });
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