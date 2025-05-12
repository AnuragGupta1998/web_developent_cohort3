import express from "express";
import mongoose from "mongoose";
import { UserModel, TodoModel } from "./db.js";
import bcrypt from "bcrypt";

// const DB_NAME = "anuragtodos";
// const DB_URL = `mongodb://localhost:27017/${DB_NAME}`;

mongoose
  .connect(
    // `mongodb+srv://anurag6967:Anurag123@cluster0.zterbns.mongodb.net/${DB_NAME}`,
    `${process.env.MONGODB_URI}${process.env.DB_NAME}`,
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the MongoDB Express App</h1>");
});

//signup route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const hashPasssword = await bcrypt.hash(password, 10);  
    
  const user = await UserModel.create({
    name,
    email,
    password:hashPasssword
  });

    if (!user) {
    return res.status(400).json({ message: "User not created" });
    }

  res.status(200).json({
    message: "User signed up successfully",
    user: user,
  });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const user = await UserModel.findOne({
    email,
    password,
  });

  if(password != user.password){
    return res.status
  }

  res.status(200).json({ message: "User signed in successfully" });
});









app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
