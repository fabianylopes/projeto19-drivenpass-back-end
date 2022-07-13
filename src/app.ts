import cors from "cors";
import chalk from "chalk";

import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();

import router from "./routers/index.js";
const app = express();

app.use(cors());
app.use(json());
app.use(router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(chalk.bold.cyanBright(`Server is up and runnig on port ${PORT}`));
});