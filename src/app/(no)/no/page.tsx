import { Resume } from "@/components/resume/Resume";
import { getContent } from "@/content";

export default function HomeNorwegian() {
  return <Resume content={getContent("no")} />;
}
