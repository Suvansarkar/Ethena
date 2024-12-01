"use client";

import { useEffect, useState } from "react";
import Topic from "./elements/Topic";
import Image from "next/image";
import { useOptionStore, useResposeStore, useStore } from "../lib/store";

export default function QuestionPanel({ questions }: { questions: any[] }) {
  const currentQuestion = useStore((state) => state.currentQuestion);
  const selectedStore = useOptionStore((state) => state.selected);
  const setSelectedStore = useOptionStore((state) => state.setSelected);
  const answers = useResposeStore((state) => state.answers);
  const updateAnswer = useResposeStore((state) => state.updateAnswer);
  useEffect(() => {
    if (answers.find((answer) => answer.id === currentQuestion)) {
      setSelectedStore(
        answers.find((answer) => answer.id === currentQuestion)!.selectedOption
      );
    } else {
      setSelectedStore(-1);
    }
  }, [currentQuestion]);

  return (
    <div className="w-full bg-white rounded-3xl flex-grow">
      <div className="w-full py-4 px-6 flex items-center border-b">
        <div className="flex w-full">
          <Topic
            className="bg-black text-white font-semibold text-nowrap"
            from={-1}
          >
            Question {currentQuestion + 1}
          </Topic>
          <Topic
            className="bg-transparent font-semibold hidden md:flex"
            from={-1}
          >
            Topic: {questions[currentQuestion].topic}
          </Topic>
        </div>
        <Topic
          className="bg-transparent border border-[#D1D1D1] text-sm text-nowrap hidden md:flex"
          from={-1}
        >
          Single Choice Type Question
        </Topic>
        <div className="w-full justify-between text-sm pl-6 hidden md:flex">
          <div className="flex items-center border border-[#D1D1D1] rounded-full">
            <div className="flex justify-between items-center gap-2 py-[10px] px-4 border-r border-[#D1D1D1]">
              <span>Markings: </span>
              <span className="text-green-500 font-semibold">
                +{questions[currentQuestion].positiveMark}
              </span>
            </div>
            <div className="font-semibold text-[#EB5050] py-[10px] px-4">
              -{questions[currentQuestion].negativeMark}
            </div>
          </div>
          <Topic
            className="bg-transparent border border-[#EB5050] text-sm text-[#EB5050] gap-2"
            from={-2}
          >
            <Image src="/exclamation.png" width={16} height={16} alt="danger" />
            Report
          </Topic>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center p-7  overflow-auto">
        <div className="bg-[#F2F3F5] w-full p-[20px] rounded-xl font-[500] text-2xl pl-[27px]">
          {questions[currentQuestion].content}
        </div>
        <div className="w-full mt-6 flex flex-col gap-2">
          {questions[currentQuestion].options.map(
            (option: any, index: number) => (
              <label
                key={index}
                className={`flex items-center mb-4 py-[12px] cursor-pointer rounded-xl px-6 border ${
                  selectedStore == index ? "!border-[#7A1DC5]" : ""
                }`}
              >
                <input
                  type="radio"
                  name="preservative"
                  value={option.content}
                  className="mr-2 accent-[#7A1DC5]"
                  checked={selectedStore === index}
                  onChange={() => setSelectedStore(index)}
                />
                {option.content}
              </label>
            )
          )}
        </div>
        <div
          className="text-blue-600 pl-6 text-sm font-bold cursor-pointer"
          onClick={() => {
            setSelectedStore(-1);
            updateAnswer(currentQuestion, -1, false);
          }}
        >
          CLEAR RESPONSE
        </div>
      </div>
    </div>
  );
}
