// require("dotenv").config({path:"./.env"})
import mongoose from "mongoose"
import connectToDB from "./db/index.js"
import {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
});

console.log("main index file is running")
 
//connectToDB() is async function so it return a 
connectToDB()
.then(()=>{
    
    app.on("error",(err)=>{
        console.error("Error starting the server:", err);
        throw err;
    });
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((err) =>{
    console.log("Error connecting to MongoDB in main index.js file:", err);
})








/*
IIFI approach to 
 import {DB_NAME} from "./constants.js"
 import express from "express";
 import mongoose from "mongoose";
 import dotenv from "dotenv";

dotenv.config({path:"./.env"})  
const app = express();
;(async () => {
    try{
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    app.on("error",(err) => {
        console.error("Error starting the server:", err);
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
catch(err){
    console.error("Error connecting to MongoDB:", err);
}}
)(); */