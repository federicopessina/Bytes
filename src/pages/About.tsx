import MarkdownPage from "../components/MarkdownPage";
import about from "../content/pages/about.md?raw";

export default function About() {
  return <MarkdownPage content={about} />;
}