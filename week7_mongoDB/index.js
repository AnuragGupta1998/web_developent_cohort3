import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { UserModel, TodoModel } from "./db.js";
import { authMid } from "./authMiddleware.js";
dotenv.config();

// const DB_NAME = "anuragtodos";
// const DB_URL = `mongodb://localhost:27017/${DB_NAME}`;

await mongoose
  .connect(
    // `mongodb+srv://anurag6967:Anurag123@cluster0.zterbns.mongodb.net/${DB_NAME}`,
    `${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the MongoDB Express App</h1>");
});

//signup route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    // Check if the user already exists
    const findUser = await UserModel.findOne({ email });

    if (findUser) {
      return res.status(400).json({ message: "User already exists please signIn" });
    }

    //hashing password
    const hashPasssword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await UserModel.create({
      name,
      email,
      password: hashPasssword,
    });

    if (!user) {
      return res.status(400).json({ message: "User not created" });
    }

    res.status(200).json({
      message: "User signed up successfully",
      user: user,
    });
  }
  catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Check if the user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found in DB" });
    }

    //verify the password
    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    //set token into cookies to authentication
    res.cookie("userToken", token, { httpOnly: true, secure: true });

    res.status(200).json({
      message: "User signed in successfully",
      token: token,
      // user: user,
    });
  } 
  catch (error) {
    console.error("Error in signin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/userProfile", authMid, async (req, res) => {
  const userID = req.user;

  const user = await UserModel.findById(userID);

  return res.status(200).json({
    message: "User profile",
    user: user,
  });
});

app.post("/logout", async (req, res) => {
  res.clearCookie("userToken");
  return res.status(200).json({
    message: "User logged out successfully",
  });
});

//add todo routes of user
app.post("/addTodo", authMid, async (req, res) => {
  const userID = req.user;
  console.log("add todos routes");

  const { title, description, done } = req.body;
  console.log("add todos routes", title, description, done);

  if (!title || !description || !done) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  const todo = await TodoModel.create({
    title,
    description,
    done,
    userId: userID,
  });
  if (!todo) {
    return res.status(400).json({ message: "Todo not created" });
  }
  res.status(200).json({
    message: "Todo created successfully",
  });
});

//all todos of particular user
app.get("/todos", authMid, async (req, res) => {
  const userID = req.user;

  const todos = await TodoModel.find({ userId: userID });

  return res.status(200).json({
    message: "User todos",
    todos: todos,
  });
});

//get all users
app.get("/admin", async (req, res) => {
  const allUsers = await UserModel.find();

  res.json({
    message: "All users",
    users: allUsers,
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
