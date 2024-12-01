"use client";
import { ChevronDown, EllipsisVertical, Info } from "lucide-react";
import Button from "./elements/Button";
import Image from "next/image";
import { useState } from "react";
import { useResposeStore, useStore } from "../lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getScore } from "../lib/utils";

export default function QuestionSelector({
  questions,
  id,
}: {
  questions: any[];
  id: string;
}) {
  const [expanded, setExpanded] = useState<Boolean>(true);

  const setQuestion = useStore((state) => state.setQuestion);
  const currentQuestion = useStore((state) => state.currentQuestion);
  const answers = useResposeStore((state) => state.answers);

  const router = useRouter();

  function getColor(id: number) {
    const result = answers.find((answer) => answer.id === id);
    if (result == undefined) {
      return "border border-black hover:bg-black/20";
    } else if (result.markedForReview) {
      if (result.selectedOption !== -1) {
        return "bg-blue-500";
      } else {
        return "bg-orange-400";
      }
    } else if (result.selectedOption === -1) {
      return "bg-slate-400";
    } else {
      return "bg-green-400";
    }
  }
  return (
    <div className="hidden lg:block">
      <div
        className={`bg-white h-full w-[384px] rounded-3xl flex flex-col flex-shrink-0 ${
          expanded ? "" : "hidden"
        }`}
      >
        <div className="border-b flex h-[72px] justify-around items-center">
          <button className="p-2 rounded-full hover:bg-black/20">
            <Image
              src="/expand.png"
              width={32}
              height={32}
              alt="left"
              onClick={() => {
                setExpanded(!expanded);
              }}
            />
          </button>

          <button
            className="p-2 rounded-full hover:bg-black/20 flex justify-center items-center"
            onClick={() => {
              alert("This function has not been implemented~!");
            }}
          >
            <Image src="/user.png" width={32} height={32} alt="left" />
            <ChevronDown size={24} className="stroke-black" />
          </button>
          <button
            className="flex py-1 px-2 border border-black items-center justify-center rounded-lg gap-2 hover:bg-black/20"
            onClick={() => {
              alert("Here are some sample instructions! blah blah blah.");
            }}
          >
            <Info size={20} className="stroke-black" />
            <span className="text-black">Instruction</span>
          </button>
          <button
            className="p-2 rounded-full hover:bg-black/20 flex justify-center items-center"
            onClick={() => {
              alert("This function has not been implemented~!");
            }}
          >
            <EllipsisVertical size={24} className="stroke-black" />
          </button>
        </div>
        <div className=" text-xs flex flex-col border-b justify-around items-center p-5 gap-2">
          <div className="flex gap-2 justify-between w-full">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-400"></div>
              Answered
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 rounded-full bg-slate-400"></div>
              Not Answered
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 rounded-full border border-black"></div>
              Not Visited Yet
            </div>
          </div>
          <div className="flex gap-2 justify-between w-full">
            <div className="flex items-center justify-center gap-2 text-nowrap">
              <div className="w-4 h-4 rounded-full bg-orange-400 text-nowrap"></div>
              Marked for Review
            </div>
            <div className="flex items-center justify-center gap-2 text-nowrap">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              Answered and Marked for review
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col h-[52dvh] overflow-y-auto p-5">
          <div className="grid grid-cols-6 gap-4 p-0 ">
            {questions.map((question, index) => (
              <button
                key={index}
                className={`w-11 h-11 rounded-full ${getColor(index)}`}
                onClick={() => {
                  setQuestion(index);
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full border-t py-6 flex items-center justify-center basis-auto flex-grow-0 flex-shrink-0 ">
          <Link href={`/credits/${id}`}>
            <button className="px-20 h-[48px] rounded-lg bg-[#7A1DC5] text-white font-bold">
              Submit Test
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`w-[106px] flex-shrink-0 h-full bg-white rounded-3xl ${
          expanded ? "hidden" : ""
        }`}
      >
        <div className="border-b flex h-[72px] justify-around items-center">
          <button className="p-2 rounded-full hover:bg-black/20">
            <Image
              src="/expand_inverse.png"
              width={32}
              height={32}
              alt="left"
              onClick={() => {
                setExpanded(!expanded);
              }}
            />
          </button>
        </div>
        <div className="w-full flex flex-col overflow-y-auto p-5 max-h-[calc(100%-72px)] h-[60dvh] items-center justify-start">
          <div className="grid grid-cols-1 gap-4 p-0">
            {questions.map((question, index) => (
              <button
                key={index}
                className={`w-11 h-11 rounded-full ${getColor(index)}`}
                onClick={() => {
                  setQuestion(index);
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full border-t py-6 flex items-center justify-center basis-auto flex-grow flex-shrink-0">
          <button className=" rounded-lg bg-[#7A1DC5] text-white font-bold p-3">
            <Image src="/exit.png" width={24} height={24} alt="submit" />
          </button>
        </div>
      </div>
    </div>
  );
}
