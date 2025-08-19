import { GrGamepad } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { GrVideo } from "react-icons/gr";
import { GrJs } from "react-icons/gr";
import { GrWordpress } from "react-icons/gr";
import { GrCode } from "react-icons/gr";
import { IconType } from "react-icons/lib";

export interface TimelineCard {
  id: number;
  title: string;
  designation: string;
  location: string;
  content: string[];
  startMonth: string;
  endMonth: string;
  startYear: number;
  endYear: number;
  bgColor: string;
  icon: IconType;
}

export const timelineCards: TimelineCard[] = [
  {
    id: 1,
    title: "ReactJs Portfolio",
    designation: "Frontend Developer",
    location: "Goa",
    content: ["New and updated Portfolio", "Reactjs and Typescript", "Custom hooks for scalability", "Extensive git branching and clean management"],
    startMonth: "February",
    endMonth: "March",
    startYear: 2025,
    endYear: 2025,
    bgColor: '#f6d465',
    icon: GrReactjs
  },
  {
    id: 2,
    title: "Game-Hub",
    designation: "Frontend Developer",
    location: "Goa",
    content: ["Browse the latest collections of games", "Responsive interface with Chakra UI",  "Search, genre filtering, platform selection, and sorting features"],
    startMonth: "November",
    endMonth: "December",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#f0523c',
    icon: GrGamepad
  },
  {
    id: 3,
    title: "FilmHive",
    designation: "Frontend Developer",
    location: "Goa",
    content: ["Responsive movie app using HTML, CSS, and JS", "Integrated with the TMDB API", " Bookmarking movies, persistent watchlist", "Data retention on reload/restart without backend DB"],
    startMonth: "July",
    endMonth: "July",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#feb0e1',
    icon: GrVideo
  },
  {
    id: 4,
    title: "React 18",
    designation: "Frontend Developer",
    location: "Goa",
    content: ["ReactJs with Typescript", "Functional components", "Hooks, HOCs, custom hooks, API handling"],
    startMonth: "August",
    endMonth: "October",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#13af71',
    icon: GrReactjs
  },
  {
    id: 5,
    title: "The Complete Javascript Course 2024",
    designation: "Frontend Developer",
    location: "Goa",
    content: ["Advanced Javascript", "API handling, module Js, libraries"],
    startMonth: "June",
    endMonth: "July",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#74bde9',
    icon: GrJs
  },
  {
    id: 6,
    title: "Digital Marketing",
    designation: "Wordpress Developer",
    location: "Hyderabad",
    content: ["Wordpress website for company", "Elementor, AIOSEO, Astra, elementsKit", "Custom CSS, JS, JQuery and PHP"],
    startMonth: "March",
    endMonth: "March",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#ffeb5c',
    icon: GrWordpress
  },
  {
    id: 7,
    title: "Fabiia Ltd",
    designation: "Wordpress Developer",
    location: "London UK",
    content: ["Increased website traffic from 2-3 to 12-18 daily visits", " 100% scores for core web vitals", "Responsiveness and optimal user experience with Elementor", "Web scraping with Octoparse", ],
    startMonth: "August",
    endMonth: "February",
    startYear: 2023,
    endYear: 2024,
    bgColor: '#cb9bfb',
    icon: GrWordpress
  },
  {
    id: 8,
    title: "Paexskin Pvt. Ltd",
    designation: "Frontend Developer",
    location: "Pune",
    content: ["Software maintenance of the company’s entire product codebase", "Enhanced product responsiveness", "Independent development and integration of a Chat-Bot prototype from scratch", "Developed custom Moodle plugins and themes"],
    startMonth: "May",
    endMonth: "January",
    startYear: 2022,
    endYear: 2023,
    bgColor: '#ff995f',
    icon: GrCode
  },
];