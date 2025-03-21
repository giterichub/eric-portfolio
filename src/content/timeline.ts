export interface TimelineCard {
  id: number;
  title: string;
  content: string;
  startYear: number;
  endYear: number;
}

export const timelineCards: TimelineCard[] = [
  {
    id: 1,
    title: "Future Vision",
    content: "Launched sustainability initiative",
    startYear: 2022,
    endYear: 2025
  },
  {
    id: 2,
    title: "Global Recognition",
    content: "Awarded industry leadership prize",
    startYear: 2020,
    endYear: 2022
  },
  {
    id: 3,
    title: "Tech Revolution",
    content: "Implemented AI-driven solutions",
    startYear: 2018,
    endYear: 2020
  },
  {
    id: 4,
    title: "Market Expansion",
    content: "Expanded to 3 new countries",
    startYear: 2016,
    endYear: 2018
  },
  {
    id: 5,
    title: "Foundation Built",
    content: "Established core business operations",
    startYear: 2014,
    endYear: 2016
  },
];