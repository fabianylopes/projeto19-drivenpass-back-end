import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import documentSchema from "../schemas/documentSchema.js";

const documentRouter = Router();

documentRouter.use(validateTokenMiddleware);
documentRouter.post('/document', validateSchemaMiddleware(documentSchema));
documentRouter.get('/document');
documentRouter.get('/document/:id');
documentRouter.delete('/document/:id');

export default documentRouter;