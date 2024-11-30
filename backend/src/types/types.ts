export interface Option {
  content: string;
  optionNumber: number;
}

export interface Test {
  title: string;
  description: string;
  duration: number;
  questions: Question[];
}

export interface Question {
  content: string;
  options: Option[];
  correctOption: number;
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
