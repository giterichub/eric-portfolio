export interface TimelineCard {
  id: number;
  title: string;
  designation: string;
  content: string;
  startMonth: string;
  endMonth: string;
  startYear: number;
  endYear: number;
  bgColor: string;
}

export const timelineCards: TimelineCard[] = [
  {
    id: 1,
    title: "ReactJs Portfolio",
    designation: "Frontend Developer",
    content: "Launched sustainability initiative",
    startMonth: "February",
    endMonth: "March",
    startYear: 2025,
    endYear: 2025,
    bgColor: '#f6d465'
  },
  {
    id: 2,
    title: "Game-Hub",
    designation: "Frontend Developer",
    content: "Awarded industry leadership prize",
    startMonth: "November",
    endMonth: "December",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#f0523c'
  },
  {
    id: 3,
    title: "FilmHive",
    designation: "Frontend Developer",
    content: "Implemented AI-driven solutions",
    startMonth: "July",
    endMonth: "July",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#feb0e1'
  },
  {
    id: 4,
    title: "React 18",
    designation: "Frontend Developer",
    content: "Expanded to 3 new countries",
    startMonth: "August",
    endMonth: "October",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#13af71'
  },
  {
    id: 5,
    title: "The Complete Javascript Course 2024",
    designation: "Frontend Developer",
    content: "Established core business operations",
    startMonth: "June",
    endMonth: "July",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#74bde9'
  },
  {
    id: 5,
    title: "Digital Marketing",
    designation: "Wordpress Developer",
    content: "Established core business operations",
    startMonth: "March",
    endMonth: "March",
    startYear: 2024,
    endYear: 2024,
    bgColor: '#ffeb5c'
  },
  {
    id: 6,
    title: "Fabiia Ltd",
    designation: "Wordpress Developer",
    content: "Established core business operations",
    startMonth: "August",
    endMonth: "February",
    startYear: 2023,
    endYear: 2024,
    bgColor: '#cb9bfb'
  },
  {
    id: 7,
    title: "Paexskin Pvt. Ltd",
    designation: "Frontend Developer",
    content: "Established core business operations",
    startMonth: "May",
    endMonth: "January",
    startYear: 2022,
    endYear: 2023,
    bgColor: '#ff995f'
  },
];