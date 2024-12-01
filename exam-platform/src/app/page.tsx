import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link href="/exam">
        <button className="rounded-xl bg-purple-600 py-2 px-4 text-white font-semibold">
          Start test 1
        </button>
      </Link>
    </div>
  );
}
