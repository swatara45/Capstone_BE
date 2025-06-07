import CryptoJs from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../models/User.mjs";
import dotenv from "dotenv";

dotenv.config();

// Register user

 const registerUser = async (req, res) => {
  try {
    if (!req.body.fullname || !req.body.email || !req.body.country || !req.body.address || !req.body.password) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      age: req.body.age,
      country: req.body.country,
      address: req.body.address,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        process.env.PASS
      ).toString(),
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};
// Login user

 const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("You have not registered");
    }

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS
    );

    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(500).json("Wrong Password");
    }

    const { password, ...info } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { loginUser, registerUser };