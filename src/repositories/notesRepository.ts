import { prisma } from "../config/db.js";
import { CreateNote } from "../services/notesService.js";

export async function create(createNote: CreateNote) {
    return prisma.secureNotes.create({
        data: createNote,
    });
}

export async function findByTitle(title: string) {
    return prisma.secureNotes.findUnique({
        where: {
            title,
        }
    });
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