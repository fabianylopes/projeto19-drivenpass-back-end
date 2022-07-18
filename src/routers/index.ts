import { Router } from "express";

import userRouter from "./userRouter.js";
import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";
import cardRouter from "./cardRouter.js";
import wifiRouter from "./wifiRouter.js";
import documentRouter from "./documentRouter.js";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(notesRouter);
router.use(cardRouter);
router.use(wifiRouter);
router.use(documentRouter);

export default router;