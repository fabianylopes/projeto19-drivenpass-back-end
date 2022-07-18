import { CreateDocument } from "../repositories/documentRepository.js"; 
import * as documentRepository from "../repositories/documentRepository.js"

export async function create(reateDocument: CreateDocument) {
    const { title } = reateDocument;
    
    const existingTitle = await documentRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    await documentRepository.create(reateDocument); 
}

export async function get(userId: number) {
    return documentRepository.findAll(userId);
}

export async function getById(id: number) {
    const document = documentRepository.findById(id);
    if(!document) throw { type: "not found", message: "document not found" }

    return document;
}

export async function deleteById(id: number) {
    const document = documentRepository.deleteById(id)
    if(!document) throw { type: "not found", message: "document not found" }

    return document;
}