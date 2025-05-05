import cookieParser from 'cookie-parser';
import express from 'express';
import jwt from 'jsonwebtoken';
import { auth } from './authMiddleware.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 3001;
const SECRET = "ANURAG"

app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const users = [];

app.get("/",function(req,res){

    // res.sendFile("/Users/anuraggupta/COHORT_3/web_development/week6.1_jwt/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup",(req,res)=>{
    const {email , password} = req.body;

    const user = users.find(user =>user.email == email);

    if(user){
        return res.json({
            msg:"user already exists"
        })
    }

    // users.push({email,password});
    const u = {email,password};
    users.push(u);

    return res.status(201).json({
        msg:"user signup successfully",
        // users
    });
})

app.post("/signin",(req,res) =>{
    const {email , password} = req.body;

    const user = users.find(user => user.email === email && user.password === password);

    if(!user){
        return res.status(401).json({
            msg:"Invalid credentials"
        })
    }

    const token = jwt.sign({email,password},SECRET);

    user.token = token;
    
    //set cookie
    res.cookie("anuragToken",token,{
        httpOnly:true,
        secure:true,
    });

    res.header("jwtToken",token)
    // res.header("Authorization",token)
    // res.setHeader("Authorization2",token);

    return res.status(200).json({
        msg:"User logged in successfully",
        token,
        // users
    })
})

app.get("/allUsers",(req,res) =>{

    return res.status(200).json({
        msg:"All users",
        users
    })
})

//it uses headers to read token

app.get("/profile",(req,res) =>{
    const token = req.cookies.anuragToken;
    console.log("token",token);
    const verifyingToken = jwt.verify(token,SECRET);
    if(!verifyingToken){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
    return res.status(200).json({
        msg:"User profile",
        user:verifyingToken
    })
})

app.get("/protected",auth,(req,res) =>{
    return res.status(200).json({
        msg:"Protected route",
        user:req.user
    })
})

app.get("/me",(req,res) =>{
    const userToken = req.headers["token"];
    console.log("userToken",userToken);
    const verifyingToken = jwt.verify(userToken,SECRET);
    if(!verifyingToken){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
    console.log("verifyingToken",verifyingToken);
    return res.status(200).json({
        msg:"User me",
        user:verifyingToken
    })
})
app.get("/secondMe",(req,res) =>{
    const userToken = req.headers.authorization;
    console.log("userToken",userToken);
    const verifyingToken = jwt.verify(userToken,SECRET);
    if(!verifyingToken){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
    return res.status(200).json({
        msg:"User secondMe",
        user:verifyingToken
    })
})

app.get("/jwtUser",(req,res) =>{
    const userToken = req.headers.jwttoken;
    console.log("userToken",userToken);
    const verifyingToken = jwt.verify(userToken,SECRET);
    if(!verifyingToken){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
    return res.status(200).json({
        msg:"User jwtUser",
        user:verifyingToken
    })
})





app.post("/logout",(req,res) =>{
    const token = req.cookies.anuragToken;

    if(!token){
        return res.status(401).json({
            msg:"Unauthorized"
        })
    }

    //clear cookie
    res.clearCookie("anuragToken");

    return res.status(200).json({
        msg:"User logged out successfully"
    })
})




app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));