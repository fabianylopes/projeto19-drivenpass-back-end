import { Router } from "express";

import * as wifiController from "../controllers/wifiController.js"
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.use(validateTokenMiddleware);
wifiRouter.post('/wifi',validateSchemaMiddleware(wifiSchema), wifiController.create);
wifiRouter.get('/wifi', wifiController.get);
wifiRouter.get('/wifi/:id', wifiController.getById);
wifiRouter.delete('/wifi/:id', wifiController.deleteById);

export default wifiRouter;