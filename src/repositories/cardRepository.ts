import { Cards } from "@prisma/client";
import { prisma } from "../config/db.js";

export type CreateCard = Omit<Cards, "id">;

export async function create(createCard: CreateCard) {
    return prisma.cards.create({
        data: createCard,
    });
}

export async function findByTitle(title: string) {
    return prisma.cards.findFirst({
        where: {
            title,
        }
    });
}

export async function findAll(userId: number) {
    return prisma.cards.findMany({
        where: {
            userId,
        },
        select:{
            id: true,
            title: true,
            password: true,
        } 
    })
}

export async function findById(id: number) {
    return prisma.cards.findUnique({
        where: {
            id,
        }
    });
}

export async function deleteById(id: number) {
    return prisma.cards.delete({
        where: {
            id,
        }
    });
}