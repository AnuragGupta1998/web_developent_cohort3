import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

//connecction to MongoDB using mongoose
const connectToDB = async () => {
    console.log("connectToDB function is running")
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB ${connectionInstance.connection.host}`);
    }
    catch(err){
     console.log("Error connecting to MongoDB:", err);
     process.exit(1);
    }
}

export default connectToDB;