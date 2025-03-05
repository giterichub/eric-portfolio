import { SiTypescript, SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";

export interface Technology {
  name: string;
  icon: typeof FaReact; // Correctly type the icon as JSX.Element
}

// Define the list of technologies
export const TechList: Technology[] = [
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: FaDocker },
];