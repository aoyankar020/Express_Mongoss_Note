import mongoose from "mongoose";
import { INote } from "../interfaces/noteInterface";
const { Schema } = mongoose;

const noteSchema = new Schema<INote>({
  title: String,
  author: String,
  content: String,
  isArchived: { type: Boolean, default: false },
  isPinned: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ["high", "low", "medium"],
    default: "high",
  },

  date: { type: Date, default: Date.now },
});

export const note = mongoose.model<INote>("notes", noteSchema);
