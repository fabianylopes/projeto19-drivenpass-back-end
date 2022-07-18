import { prisma } from "../config/db.js";
import { Documents } from "@prisma/client";

export type CreateDocument = Omit<Documents, "id">

export async function create(createDocument: CreateDocument) {
    return prisma.documents.create({
        data: createDocument,
    });
}

export async function findByTitle(title: string) {
    return prisma.documents.findFirst({
        where:{
            title,
        }
    })
}

export async function findAll(userId: number) {
    return prisma.documents.findMany({
        where: {
            userId,
        },
        select:{
            id: true,
            title: true,
        } 
    });
}

export async function findById(id: number) {
    return prisma.documents.findUnique({
        where: {
            id,
        }
    })
}

export async function deleteById(id: number) {
    return prisma.documents.findUnique({
        where: {
            id,
        }
    })
}