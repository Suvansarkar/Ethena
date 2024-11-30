"use client";

import { useEffect, useState } from "react";
import Topic from "./elements/Topic";
import Image from "next/image";

export default function QuestionPanel() {
  const [selected, setSelected] = useState<number>(-1);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  const options = [
    "Sodium Metabisulphite",
    "Citric Acid",
    "Sodium Benzoate",
    "Potassium Metabisulphite",
  ];

  return (
    <div className="w-full bg-white rounded-3xl flex-grow">
      <div className="w-full py-4 px-6 flex items-center border-b">
        <div className="flex w-full">
          <Topic className="bg-black text-white font-semibold text-nowrap">
            Question 1
          </Topic>
          <Topic className="bg-transparent font-semibold">
            Topic: Food Standard
          </Topic>
        </div>
        <Topic className="bg-transparent border border-[#D1D1D1] text-sm text-nowrap">
          Single Choice Type Question
        </Topic>
        <div className="flex w-full justify-between text-sm pl-6">
          <div className="flex items-center border border-[#D1D1D1] rounded-full">
            <div className="flex justify-between items-center gap-2 py-[10px] px-4 border-r border-[#D1D1D1]">
              <span>Markings: </span>
              <span className="text-green-500 font-semibold">+1</span>
            </div>
            <div className="font-semibold text-[#EB5050] py-[10px] px-4">
              -0.25
            </div>
          </div>
          <Topic className="bg-transparent border border-[#EB5050] text-sm text-[#EB5050] gap-2">
            <Image src="/exclamation.png" width={16} height={16} alt="danger" />
            Report
          </Topic>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center p-7  overflow-auto">
        <div className="bg-[#F2F3F5] w-full p-[20px] rounded-xl font-[500] text-2xl pl-[27px]">
          Which of the following is commonly used as preservatives in the
          preparation of tomato ketchup?
        </div>
        <div className="w-full mt-6 flex flex-col gap-2">
          {options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center mb-4 py-[12px] cursor-pointer rounded-xl px-6 border ${
                selected == index ? "!border-[#7A1DC5]" : ""
              }`}
            >
              <input
                type="radio"
                name="preservative"
                value={option}
                className="mr-2 accent-[#7A1DC5]"
                checked={selected === index}
                onChange={() => setSelected(index)}
              />
              {option}
            </label>
          ))}
        </div>
        <div
          className="text-blue-600 pl-6 text-sm font-bold cursor-pointer"
          onClick={() => {
            setSelected(-1);
          }}
        >
          CLEAR RESPONSE
        </div>
      </div>
    </div>
  );
}
