import { prisma } from "../config/db";
import { Document } from "@prisma/client";

export type CreateDocument = Omit<Document, "id">

export async function create(createDocument: CreateDocument) {
    return prisma.document.create({
        data: createDocument,
    });
}

export async function get(userId: number) {
    return prisma.document.findMany({
        where: {
            userId,
        }
    });
}

export async function getById(id: number) {
    return prisma.document.findUnique({
        where: {
            id,
        }
    })
}

export async function deleteById(id: number) {
    return prisma.document.findUnique({
        where: {
            id,
        }
    })
}