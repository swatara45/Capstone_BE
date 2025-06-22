import express from "express";


const router = express.Router();

import {
  createParcel,
  getAllParcels,
  updateParcel,
  getOneParcel,
  getUserParcel,
  deleteParcel,
} from "../controllers/parcel.mjs";

import {
  verifyToken,
  verifyTokenAndAdmin,
} from "../middlewares/VerifyToken.mjs";

// CREATE PARCEL
router.post("/", createParcel);

// GET ALL PARCELS

router.get("/", verifyTokenAndAdmin, getAllParcels);

// UPDATE PARCEL
router.put("/:id", verifyTokenAndAdmin, updateParcel);


// GET ONE PARCEL
// admin
router.get("/:id", verifyTokenAndAdmin, getOneParcel);

// GET ONE PARCEL (user )
router.get("/find/:id", verifyToken, getOneParcel);

// GET USERS PARCELS

router.post("/me", verifyToken, getUserParcel);

// DELETE PARCEL

router.delete("/:id", deleteParcel);

export default router;