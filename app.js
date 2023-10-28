import express from "express";
import userRouter from "./routes/user.js"
import {config} from "dotenv";


export const app = express();

config({
    path:"./database/config.env",
})

//using middlewares

app.use(express.json());
app.use(userRouter);



app.get("/",(req,res)=>{
    res.send("Working");
})


