import { IUser } from "../interfaces/userInterface";

import mongoose from "mongoose";
// creating schema
const userSchema = new mongoose.Schema<IUser>({
  firstname: { type: String, required: true, min: 3 },
  Lastname: { type: String, required: true, min: 3 },
  email: { type: String, required: true },
  password: { type: Number, required: true, min: 6 },
});
// Creating Model
export const User = mongoose.model<IUser>("User", userSchema);
