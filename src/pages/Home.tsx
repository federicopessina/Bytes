import MarkdownPage from "../components/MarkdownPage";
import home from "../content/pages/home.md?raw";

export default function Home() {
  return <MarkdownPage content={home} />;
}