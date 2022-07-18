import { Router } from "express";

import * as cardController from "../controllers/cardController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import cardSchema from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.use(validateTokenMiddleware);
cardRouter.post('/card', validateSchemaMiddleware(cardSchema), cardController.create);
cardRouter.get('/card', cardController.get);
cardRouter.get('/card/:id', cardController.getById);
cardRouter.delete('/card/:id', cardController.deleteById);

export default cardRouter;