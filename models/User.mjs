import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, require: true },
    email: { type: String, require: true },
    age: { type: Number },
    country: { type: String, require: true },
    address: { type: String, require: true },
    password: { type: String, require: true },
    status: { type: String, default: "pending"},
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);