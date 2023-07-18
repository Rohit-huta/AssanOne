import mongoose from "mongoose";

const userSceham = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    mobile: {
      type: Number,
    },
    role: {
      type: String,
      required: true,
      default: TYPE_POSP,
    },
    tokens: [
      {
        token: {
          type: String,
          unique: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSceham);

export default User;
