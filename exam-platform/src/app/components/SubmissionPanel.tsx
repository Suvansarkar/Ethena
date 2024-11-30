import Button from "./elements/Button";

export default function SubmissionPanel() {
  return (
    <div className="flex bg-white rounded-3xl py-6 px-7 justify-between items-center">
      <div className="flex gap-6">
        <Button className="!bg-[#7A1DC5] !py-[14px] !px-6 w-[200px]">
          Save & Next
        </Button>
        <Button className="!text-black !border-[#333336] !py-[14px] !px-6 w-[200px]">
          Mark for review
        </Button>
      </div>
      <div className="flex gap-6">
        <Button className="!text-black !border-[#333336] !py-[14px] !px-6 w-[120px]">
          Previous
        </Button>
        <Button className="!text-black !border-[#333336] !py-[14px] !px-6 w-[120px]">
          Next
        </Button>
      </div>
    </div>
  );
}
