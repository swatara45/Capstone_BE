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
    const parcel = await Parcel.findById(req.params.id);
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
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