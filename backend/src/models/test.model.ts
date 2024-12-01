import { Schema } from "mongoose";
import mongoose from "mongoose";

const testSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }, // duration should be in milliseconds
  createdAt: { type: Date, default: Date.now },
  topics: [{ label: { type: String, required: true }, from: { type: Number, required: true }, to: { type: Number, required: true } }],
  questions: [
    {
      id: { type: Number, required: true },
      topic: { type: String, required: true },
      content: { type: String, required: true },
      options: [
        {
          content: { type: String, required: true },
          optionNumber: { type: Number, required: true },
        },
      ],
      correctOption: { type: Number, required: true, min: 1, max: 4 },
      positiveMark: { type: Number, required: true },
      negativeMark: { type: Number, required: true },
    },
  ],
});

export const Test = mongoose.model("Test", testSchema);
