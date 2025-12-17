import { Link } from "react-router-dom";

type PostPreviewProps = {
  title: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, excerpt, slug }: PostPreviewProps) {
  return (
    <article>
      <h3>
        <Link to={`/post/${slug}`}>{title}</Link>
      </h3>
      <p>{excerpt}</p>
    </article>
  );
}
