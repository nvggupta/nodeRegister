import express from "express";
import userRouter from "./Route/user.route.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({});
const app = express();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect DB");
  } catch (error) {
    console.log("error", error);
  }
};

const PORT = 3000;

app.use('/api/v1/user' , userRouter)
 
app.listen(PORT, () => {
  connectdb();

  console.log("Server Start");
});
