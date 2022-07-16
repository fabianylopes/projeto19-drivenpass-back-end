import { Router } from "express";

import * as authController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import authSchema from "../schemas/authSchema.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(authSchema), authController.signUp);
userRouter.post('/sign-in', validateSchemaMiddleware(authSchema), authController.signIn);

export default userRouter;