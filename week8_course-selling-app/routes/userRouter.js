import { Router } from "express";
import jwt from "jsonwebtoken";
import {z} from "zod";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import PurchaseModel from "../models/purchase.model.js";
import { userAuthMiddleware } from "../middleware/userMiddleware.js";
import CourseModel from "../models/course.model.js";

const userRouter = Router();


userRouter.post("/signup", async (req,res) => {

    const {name,email,password}=req.body;

    //zod input validation
    const signUpValidation =z.object({
        name:z.string().min(3).max(20),
        email:z.string().email(),
        password:z.string().min(6).max(20)
    })

    //check if the input is valid or not
    const result = signUpValidation.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message:"Invalid signup input",
            error: result.error.errors
        })
    }

    //check is user already exists or not 
    const findUser = await UserModel.find({email})
    if(findUser){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    //hashed the user password
    const hashedPassword = await bcrypt.hash(password, 10);

    //ccreating user into db
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

    const findUser = await UserModel.findOne({email});
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

    const token = jwt.sign({ID: findUser._id}, process.env.JWT_SECRET);

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

userRouter.get("/purchases",userAuthMiddleware,async(req,res)=>{
    const userId = req.userID;

    const purchasesByUserId = await PurchaseModel.find(userId);
    
    // const purchaseArrayId=[];

    // for(let i=0;i<purchasesByUserId.length;i++){
    //     purchaseArrayId.push(purchasesByUserId[i].courseId);
    // }

    const purchasesCourses = await CourseModel.find({
        $in:{_id:purchasesByUserId.map((purchase)=> purchase.courseId)}
    });

    return res.status(200).json({
        message:"User courses",
        courses:findUser.courses
    })
});



export default userRouter;




