import mongoose from "mongoose";
import { Test } from "../models/test.model"; // Adjust the path as necessary
import { Request, Response } from "express";
import { Topic } from "../types/types";

export const seedTest = async (req: Request, res: Response) => {
  const topics: Topic[] = [
    { label: "Food Technology", from: 0, to: 3 },
    { label: "Thermodynamics", from: 4, to: 7 },
    { label: "Engineering Math", from: 8, to: 11 },
    { label: "General Aptitude", from: 12, to: 15 },
  ];
  try {
    const test = await Test.create({
      title: "FLT 1: Food Technology",
      description: "This is a sample test with 10 questions.",
      topics,
      duration: 6000000, // 100 minutes in milliseconds
      questions: Array.from({ length: 16 }, (_, index) => ({
        content: `Question ${index + 1}`,
        id: index,
        topic: topics[Math.floor(index / 4)].label,
        options: [
          { content: "Option 1", optionNumber: 1 },
          { content: "Option 2", optionNumber: 2 },
          { content: "Option 3", optionNumber: 3 },
          { content: "Option 4", optionNumber: 4 },
        ],
        positiveMark: 1,
        negativeMark: 0.25,
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
