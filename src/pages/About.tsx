import MarkdownPage from "../components/MarkdownPage";
import about from "../content/static/about.md?raw";

export default function About() {
  return <MarkdownPage content={about} />;
}