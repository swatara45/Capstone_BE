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
  verifyTokenAndAuthorization,
} from "../middlewares/VerifyToken.mjs";

// ADD PARCEL
router.post("/", createParcel);

// GET ALL PARCELS

router.get("/", getAllParcels);

// UPDATE PARCEL
router.put("/:id", updateParcel);

// GET ONE PARCEL

router.get("/find/:id", getOneParcel);

// GET USERS PARCELS

router.post("/me", verifyToken, getUserParcel);

// DELETE PARCEL

router.delete("/:id", deleteParcel);

export default router;
