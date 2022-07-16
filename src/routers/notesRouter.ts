import { Router } from "express";

import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import * as notesController from "../controllers/notesController.js"
import notesSchema from "../schemas/notesSchema.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const notesRouter = Router();

notesRouter.use(validateTokenMiddleware);
notesRouter.post('/note', validateSchemaMiddleware(notesSchema), notesController.create);
notesRouter.get('/note', notesController.get);
notesRouter.get('/note/:id', notesController.getById);
notesRouter.delete('/note/:id',notesController.deleteById);

export default notesRouter;