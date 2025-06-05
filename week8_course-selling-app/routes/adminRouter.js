import { Router } from "express";
import AdminModel from "../models/admin.model.js";
import CourseModel from "../models/course.model.js";
import { adminAuthMiddleware } from "../middleware/adminMiddleware.js";
import {z} from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  //zod input validation
  const signUpValidation = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(3).max(20),
  });

  //check if the input is valid or not
  const result = signUpValidation.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid signup input",
      error: result.error.errors,
    });
  }

  //check is user already exists or not
  const findAdmin = await AdminModel.findOne({ email });
  if (findAdmin) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  //hashed the user password
  const hashedPassword = await bcrypt.hash(password, 10);

  //ccreating user into db
  const createAdminInDB = await AdminModel.create({
    name,
    email,
    password: hashedPassword,
  });

  return res.status(201).json({
    message: "User created successfully",
    user: createAdminInDB,
  });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const signinValidation = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
  });

  const result = signinValidation.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid signin input",
      error: result.error.errors,
    });
  }

  const findAdmin = await AdminModel.findOne({ email });
  if (!findAdmin) {
    return res.status(400).json({
      message: "User not found in DB",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, findAdmin.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({
      message: "Incorrect password",
    });
  }

  const token = jwt.sign({ ID: findAdmin._id }, process.env.JWT_ADMIN_SECRET);

  res.cookie("AdminUserToken", token, {
    httpOnly: true,
    secure: true,
    // sameSite:"strict",
    // maxAge: 24 * 60 * 60 * 1000
  });

  return res.status(200).json({
    message: "User signed in successfully",
    token,
  });
});

adminRouter.post("/course", adminAuthMiddleware, async (req, res) => {
    const adminId = req.adminUserID;

    const {title,description,price} = req.body;

    const courseValidation = z.object({
        title: z.string().min(3).max(50),
        description: z.string().min(10).max(500),
        price: z.number().positive(),
    });
    const result = courseValidation.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Invalid course input",
            error: result.error.errors,
        });
    }

    const createCourse = await CourseModel.create({
        title,
        description,
        price,
        creatorId: adminId
    });

    return res.status(201).json({
        message: "Course created successfully",
        course: createCourse,
        adminId: adminId
    });
});

export default adminRouter;
