import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, getUserById, registerNewUser } from "../controllers/user.js";

const router = express.Router();


//get api

router.get("/users/all",getAllUsers)
router.get("/users/:id",getUserById);

//post api

router.post("/users/new",registerNewUser);

export default router;