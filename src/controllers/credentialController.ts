import { Request, Response } from "express";

import { CreateCredential } from "../services/credentialService.js";
import * as credentialService from "../services/credentialService.js"

export async function create(req: Request, res: Response) {
    const credentialsData: CreateCredential = req.body;
    
    const { userToken } = res.locals;
    const userId: number = userToken.userId;

    const credentialData: CreateCredential = { ...credentialsData, userId };

    await credentialService.create(credentialData);

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
