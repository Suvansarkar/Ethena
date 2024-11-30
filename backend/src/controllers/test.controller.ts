import { Test } from "../models/test.model";
import { Student } from "../models/student.model";
import { Test as TestType } from "../types/types";
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
