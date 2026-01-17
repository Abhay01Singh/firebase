import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  googleId: String,
});

export default mongoose.model("User", userSchema);
