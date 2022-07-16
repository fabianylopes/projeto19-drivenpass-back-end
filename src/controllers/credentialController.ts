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

