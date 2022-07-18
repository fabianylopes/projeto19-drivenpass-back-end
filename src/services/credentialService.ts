import { CreateCredential } from "../repositories/credentialRepository.js"
import * as credentialRepository from "../repositories/credentialRepository.js"
import { decrypt, encrypt } from "../utils/cryptrData.js";

export async function create(createCredential: CreateCredential) {
    const { title, password } = createCredential;
    
    const existingTitle = await credentialRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    const encryptedPassword = encrypt(password);
    createCredential.password = encryptedPassword;

    await credentialRepository.create(createCredential); 
}

export async function get(userId: number) {
    const credentials = await credentialRepository.findAll(userId);

    credentials.forEach(c => c.password = decrypt(c.password));

    return credentials;
}

export async function getById(id: number, userId: number) {
    const credential = await credentialRepository.findById(id);
    if(!credential) throw { type: "not found", message: "Credential not found" }
    if(credential.userId !== userId) throw { type: "unauthorized", message: "Credential belongs to another user" }
    
    const decryptedPassword = decrypt(credential.password);
    credential.password = decryptedPassword;

    return credential;
}

export async function deleteById(id: number, userId: number) {
    const credential = await credentialRepository.deleteById(id);
    
    if(!credential) throw { type: "not found", message: "Credential not found" }
    if(credential.userId !== userId) throw { type: "unauthorized", message: "Credential belongs to another user" }
}