"use client";

import { useStore } from "@/app/lib/store";
import clsx from "clsx";

export default function Topic({
  children,
  className,
  from,
}: Readonly<{ children: React.ReactNode; className: string; from: number }>) {
  const setQuestion = useStore((state) => state.setQuestion);
  return (
    <div
      className={clsx(
        `bg-[#F5E7FF] rounded-full py-[10px] px-4 flex items-center justify-center text-sm ${
          from === -1 ? "" : "cursor-pointer"
        }`,
        className
      )}
      onClick={() => {
        if (from !== -1 && from !== -2) {
          setQuestion(from);
        }
        if (from == -2) {
          alert("This feature has not been implemented!");
        }
      }}
    >
      {children}
    </div>
  );
}
