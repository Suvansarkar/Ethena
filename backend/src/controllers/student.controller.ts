import { Test } from "../models/test.model";
import { Student } from "../models/student.model";
import { Student as StudentType } from "../types/types";
import { Request, Response } from "express";

// export async function createStudent(student: StudentType) {
//   await Student.create(student);
// }

export async function getStudents() {
  return Student.find();
}

export async function createStudent(req: Request<StudentType>, res: Response) {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
}
