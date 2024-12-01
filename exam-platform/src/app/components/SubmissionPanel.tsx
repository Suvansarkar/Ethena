"use client";

import Button from "./elements/Button";
import { useOptionStore, useResposeStore, useStore } from "../lib/store";

export default function SubmissionPanel({ size }: { size: number }) {
  const incQuestion = useStore((state) => state.incQuestion);
  const decQuestion = useStore((state) => state.decQuestion);
  const currentQuestion = useStore((state) => state.currentQuestion);

  const updateAnswer = useResposeStore((state) => state.updateAnswer);
  const updateReview = useResposeStore((state) => state.updateReview);

  const selected = useOptionStore((state) => state.selected);
  return (
    <div className="flex bg-white rounded-3xl py-6 px-7 justify-between items-center gap-2">
      <div className="flex gap-2 md:gap-6 items-center">
        <div
          onClick={() => {
            updateAnswer(currentQuestion, selected, false);
            if (currentQuestion === size - 1) {
              alert("You have reached the end of the test");
            }
            incQuestion();
          }}
        >
          <Button className="!bg-[#7A1DC5] !p-2 !md:py-[14px] !md:px-6 md:w-[200px]">
            Save & Next
          </Button>
        </div>
        <div
          onClick={() => {
            updateReview(currentQuestion, true);
            if (currentQuestion === size - 1) {
              alert("You have reached the end of the test");
              return;
            }
            incQuestion();
          }}
        >
          <Button className="!text-black !border-[#333336] !p-2 !md:py-[14px] !md:px-6 md:w-[200px]">
            Mark for review
          </Button>
        </div>
      </div>
      <div className="flex gap-2 md:gap-6">
        <div
          onClick={() => {
            if (currentQuestion === 0) return;
            decQuestion();
          }}
        >
          <Button className="!text-black !border-[#333336] !p-2 !md:py-[14px] !md:px-6 md:w-[120px]">
            Previous
          </Button>
        </div>
        <div
          onClick={() => {
            if (currentQuestion === size - 1) return;
            incQuestion();
          }}
        >
          <Button className="!text-black !border-[#333336] !p-2 !md:py-[14px] !md:px-6 md:w-[120px]">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
