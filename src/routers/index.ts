import { Router } from "express";

import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";
import cardRouter from "./cardRouter.js";
import userRouter from "./userRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(credentialRouter);
router.use(notesRouter);
router.use(userRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;