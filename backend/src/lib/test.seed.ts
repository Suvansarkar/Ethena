import mongoose from "mongoose";
import { Test } from "../models/test.model"; // Adjust the path as necessary
import { Request, Response } from "express";

export const seedTest = async (req: Request, res: Response) => {
  try {
    const test = Test.create({
      title: "Sample Test",
      description: "This is a sample test with 10 questions.",
      duration: 600000, // 10 minutes in milliseconds
      questions: Array.from({ length: 10 }, (_, index) => ({
        content: `Question ${index + 1}`,
        options: [
          { content: "Option 1", optionNumber: 1 },
          { content: "Option 2", optionNumber: 2 },
          { content: "Option 3", optionNumber: 3 },
          { content: "Option 4", optionNumber: 4 },
        ],
        correctOption: Math.floor(Math.random() * 4) + 1,
      })),
    });
    console.log("Test seeded successfully!");
    res.status(201).json(test);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to seed test", error });
  }
};
