import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes";

dotenv.config();

const app = express();
const { PORT = 3000, MONGODB_URL } = process.env;

app.use(bodyParser.json());
app.use("/api", router);

mongoose
    .connect(MONGODB_URL as string)
    .then(() => {
        console.log("App connected to database!");
        app.listen(process.env.PORT, () => {
            console.log(`App running: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
