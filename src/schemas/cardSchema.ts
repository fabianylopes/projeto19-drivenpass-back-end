import Joi from "joi";

import { CreateCard } from "../repositories/cardRepository.js";

const cardSchema = Joi.object<CreateCard>({
    title: Joi.string().required(),
    number: Joi.string().required().creditCard(),
    name: Joi.string().required(),
    cvv: Joi.string().required().length(3).pattern(/^\d{3}$/),
    expirationDate: Joi.string().required().pattern(/^\d{2}[\/]\d{2}$/),
    isVirtual: Joi.boolean().required(),
    password: Joi.string().required(),
    type: Joi.string().required().valid("debit", "credit", "both"),
});

export default cardSchema;