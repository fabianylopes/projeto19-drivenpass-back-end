import { CreateNote } from "../repositories/notesRepository.js";
import * as notesRepository from "../repositories/notesRepository.js"

export async function create(createNote: CreateNote) {
    const { title } = createNote;
    
    const existingTitle = await notesRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    await notesRepository.create(createNote); 
}

export async function get(userId: number) {
    return notesRepository.findAll(userId);
}

export async function getById(id: number, userId: number) {
    const note = await notesRepository.findById(id);
    if(!note) throw { type: "not found", message: "note not found" }
    if(note.userId !== userId) throw { type: "unauthorized", message: "Note belongs to another user" }

    return note;
}

export async function deleteById(id: number, userId: number) {
    const note = await notesRepository.deleteById(id);

    if(!note) throw { type: "not found", message: "note not found" }
    if(note.userId !== userId) throw { type: "unauthorized", message: "Note belongs to another user" }
}