import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.mjs";
import userRoute from "./routes/UserRoutes.mjs";
import parcelRoute from "./routes/ParcelRoutes.mjs";
import connectDB from "./db/conn.mjs";
import trackingRoute from "./routes/TrackingRoutes.mjs";

dotenv.config();
const app = express();



// Connect to MongoDB
connectDB();

// MIDDLEWARES
app.use(cors());
app.use(express.json());



//ROUTES
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/parcels", parcelRoute)
app.use("/api/track", trackingRoute);


app.get("/", (req, res) => {
  res.send("Server is running");
});
// SERVER

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

