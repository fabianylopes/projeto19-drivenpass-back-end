import Joi from "joi";

//import { Credentials } from "@prisma/client";
import { CreateCredential } from "../services/credentialService.js";

const credentialSchema = Joi.object<CreateCredential>({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});

export default credentialSchema;