import User from "./model";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// register new user
export const registerUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    if (!savedUser) {
      return res.status(400).json({
        message: "Error creating user, Please try again!",
      });
    }

    return res.status(201).json({
      message: "User created successfully!",
      user: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, Please try again",
      error: error.message,
    });
  }
};
