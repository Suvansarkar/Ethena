import { useResposeStore } from "./store";

export async function getScore(id: string) {
  const answers = useResposeStore((state) => state.answers);
  console.log(answers);
  const rawResponse = await fetch(`${process.env.BACKEND}/submit/test/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answers),
  });
  const score = await rawResponse.json();
  console.log("Your Score is : ", score);
  return score;
}
