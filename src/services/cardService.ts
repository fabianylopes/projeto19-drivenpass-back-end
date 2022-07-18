import { CreateCard } from "../repositories/cardRepository.js";
import * as cardRepository from "../repositories/cardRepository.js"
import { encrypt, decrypt } from "../utils/cryptrData.js";

export async function create(createCard: CreateCard) {
    const { title, password } = createCard;
    
    const existingTitle = await cardRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    const encryptedPassword = encrypt(password);
    createCard.password = encryptedPassword;

    await cardRepository.create(createCard); 
}

export async function get(userId: number) {
    const card = await cardRepository.findAll(userId);

    card.forEach(c => c.password = decrypt(c.password));

    return card;
}

export async function getById(id: number, userId:number) {
    const card = await cardRepository.findById(id);
    if(!card) throw { type: "not found", message: "card not found" }
    if(card.userId !== userId) throw { type: "unauthorized", message: "Card belongs to another user" }

    const decryptedPassword = decrypt(card.password);
    card.password = decryptedPassword;

    return card;
}

export async function deleteById(id: number, userId: number) {
    const card = await cardRepository.deleteById(id);

    if(!card) throw { type: "not found", message: "card not found" }
    if(card.userId !== userId) throw { type: "unauthorized", message: "Card belongs to another user" }
}