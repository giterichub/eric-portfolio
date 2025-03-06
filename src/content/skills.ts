import { SiTypescript, SiJavascript, SiAdobephotoshop } from "react-icons/si";
import { FaReact,FaHtml5, FaCss3, FaNodeJs, FaWordpress } from "react-icons/fa";

export interface Technology {
  name: string;
  icon: typeof FaReact; // Correctly type the icon as JSX.Element
}

// Define the list of technologies
export const TechList: Technology[] = [
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Wordpress', icon: FaWordpress },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3 },
  { name: 'Photoshop', icon: SiAdobephotoshop },
];