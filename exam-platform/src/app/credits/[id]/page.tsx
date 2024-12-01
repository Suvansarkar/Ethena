"use client";

import { useEffect, useState } from "react";
import { useResposeStore } from "../../lib/store";

export default function CreditsPage({ params }: { params: { id: string } }) {
  const answers = useResposeStore((state) => state.answers);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const submitAnswers = async () => {
      const { id } = await params;
      const rawResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/submit/test/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers: answers }),
        }
      );
      const scoreval = await rawResponse.json();
      console.log(scoreval);
      setScore(scoreval.score);
    };

    submitAnswers();
  }, [answers]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {score !== null ? (
        <>
          <div>You scored a total of {score} points!</div>
          <div>Thank you for taking the quiz!</div>
          <div>Product made by Suvan Sarkar</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
