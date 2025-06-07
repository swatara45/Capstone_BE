import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    country: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    zipcode: { type: Number },
    status: {
    type: String,
    default: "Pending" // Options: Pending, In Transit, Delivered
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
export default mongoose.model("User", UserSchema);