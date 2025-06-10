import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
if (authHeader && authHeader.startsWith("Bearer ")) {
  const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(403).json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
};

export { verifyToken, verifyTokenAndAdmin };