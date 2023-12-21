import Markdown from "react-markdown";

export default function SectionText({ text }) {
  return (
    <>
      <div>
        <Markdown className="text-2xl">{text}</Markdown>
      </div>
    </>
  );
}
