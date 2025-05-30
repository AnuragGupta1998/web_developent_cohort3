import mongoose from "mongoose";

const connectDB = async()=>{
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)

        console.log("Database connected successfully",connectionInstance.connection.host);
        
    } catch (error) {
        console.log("Error connecting to database",error);
        process.exit(1);
        
    }
}

export default connectDB;