import { Test } from "../models/test.model";
import { Student } from "../models/student.model";
import { Student as StudentType } from "../types/types";

export async function createStudent(student: StudentType) {
  await Student.create(student);
}

export async function getStudents() {
  return Student.find();
}
