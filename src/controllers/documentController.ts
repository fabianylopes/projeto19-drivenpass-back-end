import { Request, Response } from "express";
import { CreateDocument } from "../repositories/documentRepository.js";
import * as documentService from "../services/documentService.js"

export async function create(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;

    const body: CreateDocument = req.body;

    await documentService.create({ ...body, userId});

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const documents = await documentService.get(userId);

    res.send(documents);
}

export async function getById(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    const document = await documentService.getById(id, userId);

    res.send(document);
}

export async function deleteById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const document = await documentService.deleteById(id);

    res.send(document);
}