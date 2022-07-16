import Joi from "joi";

//import { SecureNotes } from "@prisma/client";
import { CreateNote } from "../services/notesService.js";

const notesSchema = Joi.object<CreateNote>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required(),
})

export default notesSchema;