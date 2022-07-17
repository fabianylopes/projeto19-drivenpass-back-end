import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import cardSchema from "../schemas/cardSchema.js";
import * as cardController from "../controllers/cardController.js";

const cardRouter = Router();

cardRouter.use(validateTokenMiddleware);
cardRouter.post('/card', validateSchemaMiddleware(cardSchema), cardController.create);
cardRouter.get('/card', cardController.get);
cardRouter.get('/card/:id', cardController.getById);
cardRouter.delete('/card/:id', cardController.deleteById);

export default cardRouter;