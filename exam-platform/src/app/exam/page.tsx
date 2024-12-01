import ExamHeader from "../components/ExamHeader";
import QuestionPanel from "../components/QuestionPanel";
import QuestionSelector from "../components/QuestionSelector";
import SubmissionPanel from "../components/SubmissionPanel";
import TopicHeader from "../components/TopicHeader";

export default function Exam() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <ExamHeader />
      <div className="flex-grow flex flex-col bg-[#F1F1F1] p-4 px-8 gap-6">
        <TopicHeader />
        <div className="flex-grow flex w-full h-full gap-6">
          <div className="flex-grow flex w-full h-full flex-col gap-6">
            <QuestionPanel />
            <SubmissionPanel />
          </div>
          <QuestionSelector />
        </div>
      </div>
    </div>
  );
}
