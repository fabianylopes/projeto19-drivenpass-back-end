import { Request, Response, NextFunction } from "express";

export function errorHandlerMiddleware(
    error, 
    req: Request, 
    res: Response, 
    next: NextFunction){

    console.log(error);

    if(error.type) {
        return res.status(errorTypeToStatusCode(error.type)).send(error.type)
    }

    return res.sendStatus(500);
}

function errorTypeToStatusCode(type: string) {
    if (type === "unauthorized") return 401;
    //if (type === "not-found") return 404;
    if (type === "conflict") return 409;
}