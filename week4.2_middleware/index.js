import express from "express"
import { checkAge } from "./middleware.js";

const app = express();

app.get("/middle1",(req,res)=>{
    res.end("Hello from middle1");
})

app.get("/jsonD",( req,res)=>{
    res.json({
        name:"John",
        age:30,
        city:"New York"
    })
});

// app.use(checkAge);

app.get("/vote",checkAge,(req,res)=>{
    res.send("You are allowed to vote");
})










app.listen(3000,()=>console.log("Server is running on port 3000"));