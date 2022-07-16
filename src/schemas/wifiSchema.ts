import Joi from "joi";

import { CreateWifi } from "../repositories/wifiRepository.js";

export const wifiSchema = Joi.object<CreateWifi>({
    title: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
});