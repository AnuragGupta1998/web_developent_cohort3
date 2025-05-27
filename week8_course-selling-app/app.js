import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    // allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '16kb' }));


import courseRouter from './routes/courseRouter.js';
import userRouter from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';


app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);














export default app;