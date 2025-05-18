import jwt from "jsonwebtoken"
import {UserModel} from "./db.js"

export const authMid = async (req,res,next) =>{
    const token = req.headers.authorization? req.headers.authorization : req.cookies.userToken ;
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // const user = await UserModel.findById(decoded.id);

        // if(!user){
        //     return res.status(401).json({message:"Unauthorized"})
        // }
        
        //sending just the id of the user
        req.user = decoded.id
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }

}
