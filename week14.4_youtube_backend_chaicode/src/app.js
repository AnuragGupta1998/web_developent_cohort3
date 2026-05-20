import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
}));

app.use(express.json({limit: "100kb"}));                         // to parse JSON request bodies with a size limit of 100kb
app.use(express.urlencoded({ limit :" 100kb", extended: true})); // to parse URL-encoded or params request bodies with a size limit of 100kb and support for rich data structures
app.use(express.static("public"));                               // to serve static files from the "public" directory
app.use(cookieParser());                                         // to parse cookies from incoming requests and populate the req.cookies object with key-value pairs representing the cookies sent by the client

// Routes
import userRouter from "./routes/user.routes.js";




//user routes
app.use("/api/v1/users",userRouter);














export {app};