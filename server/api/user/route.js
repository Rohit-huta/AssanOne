import express from "express";
import { registerUser } from "./controller";

const router = express.Router();

// POST register user route
router.post("/users", registerUser);
