import Topic from "./elements/Topic";

export default function TopicHeader() {
  return (
    <div className="w-full bg-white rounded-3xl flex p-4 gap-[10px]">
      <Topic>Food Technology</Topic>
      <Topic>Thermodynamics</Topic>
      <Topic>Engineering Math</Topic>
      <Topic>General Aptitude</Topic>
    </div>
  );
}
