import Image from "next/image";
import Button from "./elements/Button";

export default function ExamHeader() {
  return (
    <div className="w-full h-[80px] bg-[#2E064C] flex px-12 py-5 justify-between items-center">
      <div className="text-white font-semibold text-2xl font-satoshi text-nowrap">
        FLT 1: Food Techonology
      </div>
      <div className="flex items-center justify-center gap-4 text-sm">
        <Button>
          <Image src="/calculate.png" width={20} height={20} alt="calc" />
          Calculator
        </Button>
        <Button>
          <Image src="/timer_pause.png" width={20} height={20} alt="timer" />
          Pause
        </Button>
        <div className=" flex gap-2 bg-white/20 p-2 rounded-md px-4 font-semibold items-center text-base">
          <span className="text-white">Time Left</span>
          <span className="text-white">00:00:00</span>
        </div>
        <Button>Exit</Button>
      </div>
    </div>
  );
}
