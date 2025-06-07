import express from "express";
import Parcel from "../models/Parcel.mjs"; // adjust path as needed

const router = express.Router();

router.get("/track/:id", async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    if (!parcel) return res.status(404).json("Parcel not found");
    res.status(200).json(parcel);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;