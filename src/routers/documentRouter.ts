import { Router } from "express";

import * as documentController from "../controllers/documentController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import documentSchema from "../schemas/documentSchema.js";

const documentRouter = Router();

documentRouter.use(validateTokenMiddleware);
documentRouter.post('/document', validateSchemaMiddleware(documentSchema), documentController.create);
documentRouter.get('/document', documentController.get);
documentRouter.get('/document/:id', documentController.getById);
documentRouter.delete('/document/:id', documentController.deleteById);

export default documentRouter;