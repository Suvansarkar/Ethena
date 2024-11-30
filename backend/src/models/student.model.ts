import { Schema } from "mongoose";
import mongoose from "mongoose";

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  testsTaken: [
    {
      testId: { type: Schema.Types.ObjectId, ref: "Test" },
      score: { type: Number },
      duration: { type: Number },
      answers: [
        {
          questionId: { type: Schema.Types.ObjectId, ref: "Test.questions" },
          selectedOption: { type: Number },
        },
      ],
    },
  ],
});

export const Student = mongoose.model("Student", studentSchema);
