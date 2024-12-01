import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await fetch(`${process.env.BACKEND}/test`);
  const tests = await data.json();
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      {tests.map((test: any) => {
        return (
          <Link href={`/exam/${test._id}`} key={test._id}>
            <button className="rounded-xl bg-purple-600 py-2 px-4 text-white font-semibold">
              {test.title}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
