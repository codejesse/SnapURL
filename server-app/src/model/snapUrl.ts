//create Mongoose db model
import mongoose from "mongoose";
import { nanoid } from "nanoid";

const generateId = () => Math.random().toString(36).substr(2, 10);

const snapUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    snapUrl: {
      type: String,
      required: true,
      default: generateId,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const urlModel = mongoose.model("snapUrl", snapUrlSchema);
