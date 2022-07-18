import { CreateWifi } from "../repositories/wifiRepository.js"; 
import * as wifiRepository from "../repositories/wifiRepository.js"
import { encrypt, decrypt } from "../utils/cryptrData.js";

export async function create(createWifi: CreateWifi) {
    const { title, password } = createWifi;
    
    const existingTitle = await wifiRepository.findByTitle(title);
    if(existingTitle) throw { type: "conflict", message: "Title has already been registered" }

    const encryptedPassword = encrypt(password);
    createWifi.password = encryptedPassword;

    await wifiRepository.create(createWifi); 
}

export async function get(userId: number) {
    const wifi = await wifiRepository.findAll(userId);

    wifi.forEach(w => w.password = decrypt(w.password));

    return wifi;
}

export async function getById(id: number, userId: number) {
    const wifi = await wifiRepository.findById(id);
    if(!wifi) throw { type: "not found", message: "net not found" }
    if(wifi.userId !== userId) throw { type: "unauthorized", message: "Wifi belongs to another user" }

    const decryptedPassword = decrypt(wifi.password);
    wifi.password = decryptedPassword;

    return wifi;
}

export async function deleteById(id: number, userId: number) {
    const wifi = await wifiRepository.deleteById(id);

    if(!wifi) throw { type: "not found", message: "net not found" }
    if(wifi.userId !== userId) throw { type: "unauthorized", message: "Wifi belongs to another user" }
}