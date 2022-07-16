import { Credentials } from "@prisma/client";

import * as credentialRepository from "../repositories/credentialRepository.js"
import { encrypt } from "../utils/cryptrData.js";

export type CreateCredential = Omit<Credentials, "id">;

export async function create(createCredential: CreateCredential) {
    const { title, password } = createCredential;
    
    const existingTitle = await credentialRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    const encryptedPassword = encrypt(password);
    createCredential.password = encryptedPassword;

    await credentialRepository.create(createCredential); 
}

export async function get(userId: number) {
    return credentialRepository.findById(userId);
}

export async function getById(id: number) {
    const credential = credentialRepository.findById(id);
    if(!credential) throw { type: "not found", message: "Credential not found" }

    return credential;
}


/* export async function deleteById(createCredential: CreateCredential) {
    const { id } = createCredential;

    await credentialRepository.deleteById(id);
} */