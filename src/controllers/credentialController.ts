import { Request, Response } from "express";

import { CreateCredential } from "../repositories/credentialRepository.js"
import * as credentialService from "../services/credentialService.js"

export async function create(req: Request, res: Response) {
    const body: CreateCredential = req.body;

    //const { title, url, username, password } = req.body;
    
    /* const { userToken } = res.locals;
    const userId: number = userToken.userId; */

    const { userId } = res.locals.userToken;

    //const credentialData: CreateCredential = { title, url, username, password, userId };

    console.log('Body=>' + body.title + '----' + userId)

    //await credentialService.create(credentialData);

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const { userId } = res.locals.userToken;
    const credentials = await credentialService.get(userId)

    res.send(credentials);
}

export async function getById(req: Request, res: Response) {
    //const userId: number = res.locals.userToken.userId;
    const id: number = parseInt(req.params.id);

    const credential = await credentialService.getById(id)

    res.send(credential);
}

export async function deleteById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const credential = await credentialService.deleteById(id);

    res.send(credential);
}