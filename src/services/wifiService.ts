import { CreateWifi } from "../repositories/wifiRepository.js"; 
import * as wifiRepository from "../repositories/wifiRepository.js"
import { encrypt } from "../utils/cryptrData.js";

export async function create(createWifi: CreateWifi) {
    const { title, password } = createWifi;
    
    const existingTitle = await wifiRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    const encryptedPassword = encrypt(password);
    createWifi.password = encryptedPassword;

    await wifiRepository.create(createWifi); 
}

export async function get(userId: number) {
    return wifiRepository.findAll(userId);
}

export async function getById(id: number, userId: number) {
    const wifi = await wifiRepository.findById(id);
    if(!wifi) throw { type: "not found", message: "net not found" }
    if(wifi.userId !== userId) throw { type: "unauthorized", message: "Credential belongs to another user" }

    return wifi;
}

export async function deleteById(id: number) {
    const wifi = await wifiRepository.deleteById(id)
    if(!wifi) throw { type: "not found", message: "net not found" }

    return wifi;
}