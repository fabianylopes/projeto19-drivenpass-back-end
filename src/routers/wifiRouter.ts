import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { wifiSchema } from "../schemas/wifiSchema.js";
import * as wifiController from "../controllers/wifiController.js"

const wifiRouter = Router();

wifiRouter.use(validateTokenMiddleware);
wifiRouter.post('/wifi',validateSchemaMiddleware(wifiSchema), wifiController.create);
wifiRouter.get('/wifi', wifiController.get);
wifiRouter.get('/wifi/:id', wifiController.deleteById);
wifiRouter.delete('/wifi/:id', wifiController.deleteById);

export default wifiRouter;