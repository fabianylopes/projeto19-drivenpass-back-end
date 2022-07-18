import { Request, Response } from "express";

import * as cardService from "../services/cardService.js"
import { CreateCard } from "../repositories/cardRepository.js"; 

export async function create(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const card: CreateCard = req.body;

    await cardService.create({...card, userId});

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const cards = await cardService.get(userId)

    res.send(cards);
}

export async function getById(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    const card = await cardService.getById(id, userId);

    res.send(card);
}

export async function deleteById(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    await cardService.deleteById(id, userId);

    res.sendStatus(200);
}