import { Resume } from "@/components/resume/Resume";
import { getContent } from "@/content";

export default function Home() {
  return <Resume content={getContent("en")} />;
}
