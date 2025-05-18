import { Router } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {z} from "zod";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";

const userRouter = Router();


userRouter.post("/signup", async (req,res) => {

    const {name,email,password}=req.body;

    const signupValidation =z.object({
        name:z.string().min(3).max(20),
        email:z.string().email(),
        password:z.string().min(6).max(20)
    })

    const result = signupValidation.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message:"Invalid signup input",
            error: result.error.errors
        })
    }

    const findUser = await UserModel.find({email})
    if(!findUser){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUserInDB = await UserModel.create({
        name,
        email,
        password:hashedPassword
    })

    return res.status(201).json({
        message:"User created successfully",
        user:createUserInDB
    })
});

userRouter.post("/signin", async (req,res) => {

    const {email,password} = req.body;

    const signinValidation = z.object({
        email:z.string().email(),
        password:z.string().min(6).max(20)
    })

    const result = signinValidation.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message:"Invalid signin input",
            error: result.error.errors
        })
    }

    const findUser = await UserModel.findOne({email})
    if(!findUser){
        return res.status(400).json({
            message:"User not found in DB"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({
            message:"Incorrect password"
        })
    }

    const token = jwt.sign({id: findUser._id}, process.env.JWT_SECRET);

    res.cookie("Usertoken",token,{
        httpOnly:true,
        secure:true,
        // sameSite:"strict",
        // maxAge: 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
        message:"User signed in successfully",
        token
    })
})

userRouter.get("/courses", async(req,res)=>{
    const token = req.cookies.Usertoken;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    const findUser = await UserModel.findById(decoded.id);
    if(!findUser){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    return res.status(200).json({
        message:"User courses",
        courses:findUser.courses
    })
});



export default userRouter;




