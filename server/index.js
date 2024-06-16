import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import register from "./controller/register.js";

dotenv.config()
const app=express();
app.use(express.json())
app.use(cors())

const username=process.env.MONGODB_USERNAME;
const password=process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.xgiax6g.mongodb.net/registrationForm`)

app.use(bodyParser.urlencoded ({extended:true}))
app.use(bodyParser.json())

app.post("/register",register);

app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})