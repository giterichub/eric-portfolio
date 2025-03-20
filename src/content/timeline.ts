// content/timeline.ts
export interface IOrigamiNode { // Rename interface with "I" prefix
    id: string;
    year: number;
    title: string;
    folded: boolean;
    position: { x: number; y: number };
    connections: string[];
  }
  
  export const ORIGAMI_DATA: IOrigamiNode[] = [
    {
      id: "1",
      year: 2020,
      title: "Zenith Mobile App",
      folded: true,
      position: { x: 0, y: 0 },
      connections: ["2", "3"]
    },
    {
        id: "2",
        year: 2020,
        title: "Zenith Mobile App",
        folded: true,
        position: { x: 0, y: 0 },
        connections: ["2", "3"]
      },
      {
        id: "3",
        year: 2020,
        title: "Zenith Mobile App",
        folded: true,
        position: { x: 0, y: 0 },
        connections: ["2", "3"]
      },
      {
        id: "4",
        year: 2020,
        title: "Zenith Mobile App",
        folded: true,
        position: { x: 0, y: 0 },
        connections: ["2", "3"]
      },
      {
        id: "5",
        year: 2020,
        title: "Zenith Mobile App",
        folded: true,
        position: { x: 0, y: 0 },
        connections: ["2", "3"]
      },
    // ...
  ];