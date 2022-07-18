import { CreateCard } from "../repositories/cardRepository.js";
import * as cardRepository from "../repositories/cardRepository.js"
import { encrypt } from "../utils/cryptrData.js";

export async function create(createCard: CreateCard) {
    const { title, password } = createCard;
    
    const existingTitle = await cardRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    const encryptedPassword = encrypt(password);
    createCard.password = encryptedPassword;

    await cardRepository.create(createCard); 
}

export async function get(userId: number) {
    return cardRepository.findAll(userId);
}

export async function getById(id: number, userId:number) {
    const card = await cardRepository.findById(id);
    if(!card) throw { type: "not found", message: "card not found" }
    if(card.userId !== userId) throw { type: "unauthorized", message: "Credential belongs to another user" }

    return card;
}

export async function deleteById(id: number) {
    const card = await cardRepository.deleteById(id)
    if(!card) throw { type: "not found", message: "card not found" }

    return card;
}