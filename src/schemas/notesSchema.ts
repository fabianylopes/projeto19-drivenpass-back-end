import Joi from "joi";

import { CreateNote } from "../repositories/notesRepository.js";

const notesSchema = Joi.object<CreateNote>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required(),
})

export default notesSchema;