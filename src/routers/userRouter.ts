import { Router } from "express";

import * as authController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(userSchema), authController.signUp);
userRouter.post('/sign-in', validateSchemaMiddleware(userSchema), authController.signIn);

export default userRouter;