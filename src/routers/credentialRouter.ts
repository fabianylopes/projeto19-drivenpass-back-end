import { Router } from "express";

const credentialRouter = Router();

credentialRouter.post('/credential');
credentialRouter.get('/credential');

export default credentialRouter;