import { MdNorthEast } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import gameHubFeaturedImage from '../assets/images/game-hub-1.jpg';

export const techColors: { [key: string]: string } = {
  ReactJS: '#f0523c',
  JavaScript: '#8CC84B',
  CSS3: '#2965F1',
  HTML5: '#F7B731',
  NodeJS: '#13af71',
  Python: '#306998',
  SCSS: '#feb0e1',
  TypeScript: '#3178C6',
  JSX: '#F7B731',
  // Add more technologies and their colors as needed
};

interface Controls{
    href: string;
    ariaLabel: string;
    title: string;
    platform: string;
    icon: IconType;
}

// content/portfolio.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[]; // Array of image URLs
    featuredImage?: string; // Main image for cards
    backgroundColor?: string;
    isFeatured?: boolean; // Shown in ProjectComponent
    showInSlideshow?: boolean; // Include in carousel
    technologies: string[];
    tileCta: Controls;
    tileIcon: Controls;
    // Add other project-specific fields
  }
  
  export const slideshowImages = [
    '/assets/images/game-hub-2.webp',
    '/assets/images/movie-app-1.webp',
    '/assets/images/shopping-2.jpg',
    '/assets/images/portfolio-1.PNG',
    '/assets/images/todo-list-3.webp'
    // All images including those not in projects
  ];
  
  export const projects: Project[] = [
    {
      id: 'game-hub',
      title: 'Game Hub',
      description: 'Discover and explore the latest games with ease using our dynamic game library. Filter and sort games by genre, platform, popularity, and more. Search within specific filters, view game ratings, and explore detailed platform compatibility—all with an intuitive, infinite scroll interface. Get personalized game recommendations that suit your preferences and keep up with the newest releases!',
      images: [
        'https://.../proj1-1.jpg',
        'https://.../proj1-2.jpg'
      ],
      featuredImage: '/assets/images/game-hub-2.webp',
      isFeatured: true,
      showInSlideshow: true,
      backgroundColor: '#2a2a2a',
      technologies: ['ReactJS', 'TypeScript', 'NodeJS', 'JSX', 'CSS3'],
      tileCta: {href: 'https://github.com/giterichub/games-hub', ariaLabel: 'game-hub-repository', title: 'Game Hub Repository', platform: 'Github', icon: FaGithub},
      tileIcon: {href: 'https://game-hub-mu-gold.vercel.app/', ariaLabel: 'game hub', title: 'Game Hub', platform: 'website', icon: MdNorthEast},
    },
    {
        id: 'movie-app',
        title: 'Movie App',
        description: 'Discover, bookmark, and explore your favorite movies with ease. View ratings, descriptions, and movie details at a glance, and dive deeper for full info—cast, director, genres, release year, and more. Plus, easily find related films with just a click!',
        images: [
          'https://.../proj1-1.jpg',
          'https://.../proj1-2.jpg'
        ],
        featuredImage: '/assets/images/movie-app-1.webp',
        isFeatured: true,
        showInSlideshow: true,
        backgroundColor: '#2a2a2a',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        tileCta: {href: 'https://github.com/giterichub/movie-js-app', ariaLabel: 'movie-app-repository', title: 'Movie App', platform: 'Github', icon: FaGithub},
        tileIcon: {href: 'https://movie-app-js-snowy.vercel.app/', ariaLabel: 'movie-app-website', title: 'Movie App Website', platform: 'website', icon: MdNorthEast},
      },
      {
        id: 'crosshair',
        title: 'Crosshair',
        description: 'Crosshair is a simple, visually appealing e-commerce site that displays a range of clothing products. The app showcases product images, names, and prices. Built using HTML and CSS, creating responsive layouts using flex and grid.',
        images: [
          'https://.../proj1-1.jpg',
          'https://.../proj1-2.jpg'
        ],
        featuredImage: '/assets/images/shopping-2.jpg',
        isFeatured: true,
        showInSlideshow: true,
        backgroundColor: '#2a2a2a',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        tileCta: {href: 'https://github.com/giterichub/Crosshair-landing', ariaLabel: 'crosshair-github-repository', title: 'Crosshair Github Repository', platform: 'Github', icon: FaGithub},
        tileIcon: {href: 'https://giterichub.github.io/Crosshair-landing/', ariaLabel: 'crosshair website', title: 'Crosshair', platform: 'website', icon: MdNorthEast},
      },
      {
        id: 'portfolio',
        title: 'Portfolio',
        description: 'My personal portfolio is a responsive website built using HTML, CSS, and JavaScript. It features a sleek, modern design with both dark and light mode options for enhanced user experience. The site uses Flexbox and CSS Grid for a fluid, adaptable layout. It showcases my achievements, project timeline, and blog, with a dedicated contact form for inquiries.',
        images: [
          'https://.../proj1-1.jpg',
          'https://.../proj1-2.jpg'
        ],
        featuredImage: '/assets/images/portfolio-1.PNG',
        isFeatured: true,
        showInSlideshow: true,
        backgroundColor: '#2a2a2a',
        technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript'],
        tileCta: {href: 'https://github.com/giterichub/My-Portfolio', ariaLabel: 'portfolio-github-repository', title: 'Portfolio Github Repository', platform: 'Github', icon: FaGithub},
        tileIcon: {href: 'https://giterichub.github.io/My-Portfolio/', ariaLabel: 'portfolio', title: 'Portfolio', platform: 'website', icon: MdNorthEast},
      },
      {
        id: 'gmail-todo',
        title: 'Gmail Styled Todo-List',
        description: 'This to-do list app replicates the clean, minimalist style of Gmail’s desktop interface. Built with HTML, CSS, and JavaScript, it allows users to add, delete, and mark tasks as complete, while also tracking the time of creation for each item. Made use of cookies to persist data across sessions.',
        images: [
          'https://.../proj1-1.jpg',
          'https://.../proj1-2.jpg'
        ],
        featuredImage: '/assets/images/todo-list-3.webp',
        isFeatured: true,
        showInSlideshow: true,
        backgroundColor: '#2a2a2a',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        tileCta: {href: 'https://github.com/giterichub/gmail-interface-todo-list', ariaLabel: 'gmail-styled-todo-List-github-repository', title: 'Todo-List Github Repository', platform: 'Github', icon: FaGithub},
        tileIcon: {href: 'https://giterichub.github.io/gmail-interface-todo-list/', ariaLabel: 'Gmail Styled Todo-List', title: 'Gmail Styled Todo-List', platform: 'website', icon: MdNorthEast},
      }
    // Other projects...
  ];