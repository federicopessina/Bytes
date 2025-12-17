import { PostPreview } from "../components/PostPreview";

const posts = [
  {
    title: "Hello World",
    excerpt: "My first post on Bytes. Welcome to my blog!",
    slug: "hello-world",
  },
  {
    title: "Learning React",
    excerpt: "Thoughts on learning React with TypeScript.",
    slug: "learning-react",
  },
];

export function Home() {
  return (
    <main>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </main>
  );
}
