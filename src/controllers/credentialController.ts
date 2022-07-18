import { Request, Response } from "express";

import { CreateCredential } from "../repositories/credentialRepository.js"
import * as credentialService from "../services/credentialService.js"

export async function create(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const credentialData: CreateCredential = req.body;

    await credentialService.create({...credentialData, userId});

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const credentials = await credentialService.get(userId)

    res.send(credentials);
}

export async function getById(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    const credential = await credentialService.getById(id, userId);

    res.send(credential);
}

export async function deleteById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const credential = await credentialService.deleteById(id);

    res.send(credential);
}