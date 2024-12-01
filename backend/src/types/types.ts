export interface Option {
  content: string;
  optionNumber: number;
}

export interface Test {
  title: string;
  description: string;
  duration: number;
  topics: Topic[];
  questions: Question[];
}

export interface Topic {
  label: string;
  from: number;
  to: number;
}

export interface Question {
  content: string;
  options: Option[];
  correctOption: number;
  topic: string;
  id: number;
  positiveMark: number;
  negativeMark: number;
}

export interface Student {
  name: string;
  email: string;
  testTaken: Attempt[];
}

export interface Attempt {
  testId: string;
  score: number;
  duration: number;
  answers: Answer[];
}

export interface Answer {
  questionId: string;
  selectedOption: number;
}
