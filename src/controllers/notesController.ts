import { Request, Response } from "express";

import { CreateNote } from "../repositories/notesRepository.js";
import * as notesService from "../services/notesService.js"

export async function create(req: Request, res: Response) {
    const userId: number = res.locals.userToken.userId;
    
    const secureNote: CreateNote = req.body;

    await notesService.create({...secureNote, userId});

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const { userId } = res.locals.userToken;
    const notes = await notesService.get(userId)

    res.send(notes);
}

export async function getById(req: Request, res: Response) {
    //const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    const note = await notesService.getById(id)

    res.send(note);
}

export async function deleteById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const note = await notesService.deleteById(id);

    res.send(note);
}