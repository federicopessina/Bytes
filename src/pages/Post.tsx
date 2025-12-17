import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// Load all markdown files in src/posts
const posts = import.meta.glob("/src/posts/*.md", { as: "raw" });

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    // Find the loader dynamically
    const entry = Object.entries(posts).find(([path]) =>
      path.endsWith(`${slug}.md`)
    );

    if (!entry) {
      setNotFound(true);
      return;
    }

    const loader = entry[1];
    loader().then((text) => setContent(text));
  }, [slug]);

  if (notFound) return <h2>Post not found</h2>;
  if (!content) return <p>Loading...</p>;

  return (
    <main>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
