import Joi from "joi";

//import { Users } from "@prisma/client";
import { CreateUser } from "../services/userService.js";

const userSchema = Joi.object<CreateUser>({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
})

export default userSchema;