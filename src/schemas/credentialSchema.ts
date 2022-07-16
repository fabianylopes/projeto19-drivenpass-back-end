import Joi from "joi";

import { CreateCredential } from "../repositories/credentialRepository.js"

const credentialSchema = Joi.object<CreateCredential>({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});

export default credentialSchema;