import { Schema } from "mongoose";
import mongoose from "mongoose";

const testSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }, // duration should be in milliseconds
  createdAt: { type: Date, default: Date.now },
  questions: [
    {
      content: { type: String, required: true },
      options: [
        {
          content: { type: String, required: true },
          optionNumber: { type: Number, required: true },
        },
      ],
      correctOption: { type: Number, required: true, min: 1, max: 4 },
    },
  ],
});

export const Test = mongoose.model("Test", testSchema);
