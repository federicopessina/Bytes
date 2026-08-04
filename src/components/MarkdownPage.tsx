import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

export default function MarkdownPage({ content }: Props) {
  return (
    <article className="markdown">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </article>
  );
}