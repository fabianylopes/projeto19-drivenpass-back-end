import { Request, Response } from "express";

import { CreateWifi } from "../repositories/wifiRepository.js"; 
import * as wifiService from "../services/wifiService.js"

export async function create(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    
    const wifi: CreateWifi = req.body;

    await wifiService.create({...wifi, userId});

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const { userId } = res.locals.userToken;
    const wi_fi = await wifiService.get(userId)

    res.send(wi_fi);
}

export async function getById(req: Request, res: Response) {
    //const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    const wifi = await wifiService.getById(id)

    res.send(wifi);
}

export async function deleteById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const wifi = await wifiService.deleteById(id);

    res.send(wifi);
}