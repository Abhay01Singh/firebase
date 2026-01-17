import express from "express";
import jwt from "jsonwebtoken";
import admin from "../config/firebaseAdmin.js";
import User from "../models/user.js";

const router = express.Router();

router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;

    const decoded = await admin.auth().verifyIdToken(token);

    let user = await User.findOne({ email: decoded.email });

    if (!user) {
      user = await User.create({
        name: decoded.name,
        email: decoded.email,
        photo: decoded.photo_url || null,
        googleId: decoded.uid,
      });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token: jwtToken,
      user,
    });
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ message: "Authentication failed" });
  }
});

export default router;
