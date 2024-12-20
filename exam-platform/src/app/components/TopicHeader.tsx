import Topic from "./elements/Topic";

export default function TopicHeader({ topics }: { topics: string[] }) {
  return (
    <div className="w-full bg-white rounded-3xl md:flex p-4 gap-[10px] hidden">
      {topics.map((topic: any) => {
        return (
          <Topic className="" key={topic.label} from={topic.from}>
            {topic.label}
          </Topic>
        );
      })}
    </div>
  );
}
