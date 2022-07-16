import Joi from "joi";
import { CreateUser } from "../services/userService.js";

const userSchema = Joi.object<CreateUser>({
    email: Joi.string().required(),
    password: Joi.string().required()
})

export default userSchema;