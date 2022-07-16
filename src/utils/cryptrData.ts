import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.CRYPTR_SECRET;
const cryptr = new Cryptr(secretKey);

export function encrypt(data: string){  
    const encryptedData = cryptr.encrypt(data);
    return encryptedData;
}

export function decrypt(data: string){
    const decryptedData = cryptr.decrypt(data);
    return decryptedData;
}
