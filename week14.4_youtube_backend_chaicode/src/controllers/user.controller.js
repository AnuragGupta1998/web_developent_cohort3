import { asyncHandler } from "../utils/asyncHandler.js";
import {z} from "zod";
import {User} from "../models/user.model.js"

const registerUser = asyncHandler(async (req,res) => {

    const {name,email,password} = req.body;
   
    //Zod validation for user registration input
    const registerValidation = z.object({
        name:z.string().min(3).max(20),
        email:z.string().email(),
        password:z.string().min(6).max(20)
    });

    //check if the user input is valid or not
    const isValidInput = registerValidation.safeParse(req.body);
    if(!isValidInput.success){
        res.status(400).json({
            success: false,
            message: "Invalid user input",
            error: isValidInput.error.errors
        })
    }

    res.status(200).json({
        success: true,
        message: "User Registered Successfully"
    })

})

const loginUser = asyncHandler( async(req,res)=>{

    return res.status(200).json({
        success: true,
        message: "User Logged In Successfully"
    })
})

export {registerUser};