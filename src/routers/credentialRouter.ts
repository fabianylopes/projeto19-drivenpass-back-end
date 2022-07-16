import { Router } from "express";

import * as credentialController from "../controllers/credentialController.js"
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import credentialSchema from "../schemas/credentialSchema.js";

const credentialRouter = Router();

credentialRouter.use(validateTokenMiddleware);
credentialRouter.post('/credential', validateSchemaMiddleware(credentialSchema) ,credentialController.create);
credentialRouter.get('/credential', credentialController.get);
credentialRouter.get('/credential/:id', credentialController.getById);
credentialRouter.delete('/credential/:id',credentialController.deleteById);

export default credentialRouter;