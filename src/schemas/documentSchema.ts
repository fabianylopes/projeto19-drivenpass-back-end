import Joi from "joi";
import { CreateDocument } from "../repositories/documentRepository.js";

const documentSchema = Joi.object<CreateDocument>({
    type: Joi.string().required().valid("RG", "CNH"),
    fullName: Joi.string().required(),
    issueDate: Joi.string().required().pattern(/^\d{2}[\/]\d{2}[\/]\d{2}$/),
    expirationDate: Joi.string().required().pattern(/^\d{2}[\/]\d{2}$/),
    registryNumber: Joi.string().required(),
    issuingAgency:Joi.string().required()
});

export default documentSchema;