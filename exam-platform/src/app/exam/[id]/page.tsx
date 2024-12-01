import ExamHeader from "../../components/ExamHeader";
import QuestionPanel from "../../components/QuestionPanel";
import QuestionSelector from "../../components/QuestionSelector";
import SubmissionPanel from "../../components/SubmissionPanel";
import TopicHeader from "../../components/TopicHeader";

export default async function Exam({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await fetch(`${process.env.BACKEND}/test/${id}`);
  const test = await data.json();
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <ExamHeader title={test.title} duration={test.duration} />
      <div className="flex-grow flex flex-col bg-[#F1F1F1] p-4 px-8 gap-6">
        <TopicHeader topics={test.topics} />
        <div className="flex-grow flex w-full h-full gap-6">
          <div className="flex-grow flex w-full h-full flex-col gap-6">
            <QuestionPanel questions={test.questions} />
            <SubmissionPanel size={test.questions.length} />
          </div>
          <QuestionSelector questions={test.questions} id={id} />
        </div>
      </div>
    </div>
  );
}
