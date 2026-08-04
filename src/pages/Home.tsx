import MarkdownPage from "../components/MarkdownPage";
import home from "../content/static/home.md?raw";

export default function Home() {
  return <MarkdownPage content={home} />;
}