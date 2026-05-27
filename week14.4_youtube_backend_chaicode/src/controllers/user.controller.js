import { asyncHandler } from "../utils/asyncHandler.js";
import { z } from "zod";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullName } = req.body;
  console.log(username, email, password, fullName);

  //Zod validation for user registration input schema
  // const registerValidation = z.object({
  //     name:z.string().min(3).max(20),
  //     email:z.string().email(),
  //     password:z.string().min(6).max(20)
  // });

  //check if the user input is valid or not
  // const isValidInput = registerValidation.safeParse(req.body);
  // if(!isValidInput.success){
  //     res.status(400).json({
  //         success: false,
  //         message: "Invalid user input",
  //         error: isValidInput.error.errors
  //     })
  // }

  //checking all fields are not empty
  if (
    [username, email, password, fullName].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //checking if user with the same email already exists or not
  const existingUser = await User.findOne({
    $or: [ { email }, { username } ],
  });

  if (existingUser) {
    throw new ApiError(409, "User with the same email already exists");
  }
  
  console.log("Files received in controller:", req.files);

  //acceptinng files throght multer middleware and checking if avatar is uploaded or not
  const avatarLocalPath = req.files?.avatar?.[0]?.path;

  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if(!avatar) throw new ApiError(500, "Error uploading avatar to Cloudinary");

  //creating user in database
  const user = await User.create({
    username : username.toLowerCase(),
    email,
    password,
    fullName,
    avatar: avatar?.url,
    coverImage: coverImage?.url || ""
  });

  //fetching the created user from database and excluding the password and refreshToken fields from the response
  const userCreated = await User.findById(user._id).select("-password -refreshToken");

  if(!userCreated) throw new ApiError(500, "Error creating user");

  return res.status(200).json(new ApiResponse(201, userCreated, "User Registered Successfully"));


});

const loginUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User Logged In Successfully",
  });
});

export { registerUser };
