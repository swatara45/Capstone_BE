import express from "express";
import { deleteUser, getAllUsers } from "../controllers/user.mjs";

const router = express.Router();

// DELETING USER

router.delete("/:id", deleteUser)

// GET ALL USERS

router.get("/", getAllUsers)

export default router;