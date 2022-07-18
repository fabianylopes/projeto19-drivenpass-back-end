import { prisma } from "../config/db.js";
import { SecureNotes } from "@prisma/client";

export type CreateNote = Omit<SecureNotes, "id">;

export async function create(createNote: CreateNote) {
    return prisma.secureNotes.create({
        data: createNote,
    });
}

export async function findByTitle(title: string) {
    return prisma.secureNotes.findFirst({
        where: {
            title,
        }
    });
}

export async function findAll(userId: number) {
    return prisma.secureNotes.findMany({
        where: {
            userId,
        },
        select:{
            id: true,
            title: true,
        } 
    })
}

export async function findById(id: number) {
    return prisma.secureNotes.findUnique({
        where: {
            id,
        }
    });
}

export async function deleteById(id: number) {
    return prisma.secureNotes.delete({
        where: {
            id,
        }
    });
}