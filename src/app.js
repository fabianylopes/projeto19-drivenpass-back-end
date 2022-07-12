import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(chalk.bold.cyanBright(`Server is up and runnig on port ${PORT}`));
});