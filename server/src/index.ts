import express from 'express';
import mongoose  from "mongoose";
import * as dotenv from 'dotenv';
import router from '../routes/index';
import bodyParser from 'body-parser';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', router);



mongoose
  .connect(<string>process.env.mongodbURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App running : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });