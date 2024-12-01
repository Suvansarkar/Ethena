import { Test } from "../models/test.model";
import { Student } from "../models/student.model";
import { Question, Test as TestType } from "../types/types";
import { Request, Response } from "express";

export async function createTest(req: Request<TestType>, res: Response) {
  try {
    const test = await Test.create(req.body);
    res.status(200).json(test);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
}

export async function getTests(req: Request<TestType>, res: Response) {
  try {
    const tests = await Test.find({});
    res.status(200).json(tests);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
}

export async function getTest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await Test.findById(id);
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateTest(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedTest = await Test.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTest) {
      res.status(404).json({ message: "Test not found" });
      return;
    }
    res.status(200).json(updatedTest);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
}

export async function submitTest(req: Request, res: Response) {
  try {
    const { testId } = req.params;
    console.log(testId);
    const { answers } = req.body;
    let total = 0;
    const test = await Test.findById(testId).lean();
    if (!test) {
      res.status(404).json({ message: "Test not found" });
      return;
    }

    const questions: Question[] = test.questions;
    answers.forEach((answer: { id: number; selectedOption: number }) => {
      const question = questions.find((q) => q.id === answer.id);
      if (question && answer.selectedOption !== -1) {
        if (question.correctOption === answer.selectedOption) {
          total += question.positiveMark;
        } else {
          total -= question.negativeMark;
        }
      }
    });

    res.status(200).json({ score: total });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit test" });
  }
}
