import { SecureNotes } from "@prisma/client";

import * as notesRepository from "../repositories/notesRepository.js"

export type CreateNote = Omit<SecureNotes, "id">;

export async function create(createNote: CreateNote) {
    const { title } = createNote;
    
    const existingTitle = await notesRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }


    await notesRepository.create(createNote); 
}

export async function get(userId: number) {
    return notesRepository.findById(userId);
}

export async function getById(id: number) {
    const note = notesRepository.findById(id);
    if(!note) throw { type: "not found", message: "note not found" }

    return note;
}

export async function deleteById(id: number) {
    const note = notesRepository.deleteById(id)
    if(!note) throw { type: "not found", message: "note not found" }

    return note;
}