import { Router, Request, Response } from "express";
import {
  createTest,
  getTest,
  getTests,
  submitTest,
  updateTest,
} from "../controllers/test.controller";
import { Student, Test } from "../types/types";
import { seedTest } from "../lib/test.seed";
import { createStudent } from "../controllers/student.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Server is up and running! All systems live!" });
});

router.get("/about", (req: Request, res: Response) => {
  res.status(200).json({
    message: "This is a simple REST API made for the Ethena testing platform",
  });
});

router.post("/create/student", createStudent);

router.post("/create/test", createTest);
router.post("/update/test/:id", updateTest);
router.get("/test", getTests);
router.get("/test/:id", getTest);

router.post("/submit/test/:testId", submitTest);

router.post("/seed/test", seedTest);

export default router;
