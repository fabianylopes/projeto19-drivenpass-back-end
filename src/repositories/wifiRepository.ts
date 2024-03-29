import { Wifi } from "@prisma/client";
import { prisma } from "../config/db.js";

export type CreateWifi = Omit<Wifi, "id">;

export async function create(createWifi: CreateWifi) {
    return prisma.wifi.create({
        data: createWifi,
    });
}

export async function findByTitle(title: string) {
    return prisma.wifi.findFirst({
        where: {
            title,
        }
    });
}

export async function findAll(userId: number) {
    return prisma.wifi.findMany({
        where: {
            userId,
        },
        select:{
            id: true,
            title: true,
            password: true
        } 
    })
}

export async function findById(id: number) {
    return prisma.wifi.findUnique({
        where: {
            id,
        },
        
    });
}

export async function deleteById(id: number) {
    return prisma.wifi.delete({
        where: {
            id,
        }
    });
}