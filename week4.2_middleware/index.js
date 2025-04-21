import express from "express"
import { checkAge } from "./middleware.js";

const app = express();

app.get("/",(req,res)=>{   
    res.send("<h1>Home page</h1>");
});

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

//usigng middleware
// app.use(checkAge);

app.get("/vote",checkAge,(req,res)=>{
    res.send("You are allowed to vote");
});

let count=0;
function counterMiddleware(req,res,next){
    console.log("Counter middleware count:", ++count);
    next();
}

app.get("/jsonData",counterMiddleware,async (req,res)=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const jData = await data.json();

   
    res.json(JSON.stringify(jData));
})










app.listen(3000,()=>console.log("Server is running on port 3000"));