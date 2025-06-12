import Parcel from "../models/Parcel.mjs";

// Create a parcel

const createParcel = async (req, res) => {
  try {
    const newParcel = Parcel(req.body);
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all parcels

const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find();
    res.status(200).json(parcels);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update the parcel

const updateParcel = async (req, res) => {
  try {
    console.log("Updating ID:", req.params.id);
    console.log("Body received:", req.body);

    const updated = await Parcel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    console.log("Updated document:", updated);
    res.status(200).json({ message: "Parcel updated", parcel: updated });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



// Get one parcel

const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get User's Parcel

const getUserParcel = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a parcel

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(201).json("parcel has been deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  deleteParcel,
  getUserParcel,
  getOneParcel,
  updateParcel,
  getAllParcels,
  createParcel,
};