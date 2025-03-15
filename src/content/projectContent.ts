import { MdNorthEast } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

interface Controls{
    href: string;
    ariaLabel: string;
    title: string;
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
    tileCta: Controls;
    tileIcon: Controls;
    // Add other project-specific fields
  }
  
  export const slideshowImages = [
    'https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1730032452988-c8d4df1256c5?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741070487520-907d1359cb95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // All images including those not in projects
  ];
  
  export const projects: Project[] = [
    {
      id: 'game-hub',
      title: 'Game Hub',
      description: 'Find all the best games...',
      images: [
        'https://.../proj1-1.jpg',
        'https://.../proj1-2.jpg'
      ],
      featuredImage: 'https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isFeatured: true,
      showInSlideshow: true,
      backgroundColor: '#2a2a2a',
      tileCta: {href: 'https://github.com/giterichub/games-hub', ariaLabel: 'game-hub-repository', title: 'Game Hub Repository', icon: FaGithub},
      tileIcon: {href: 'https://game-hub-mu-gold.vercel.app/', ariaLabel: 'game hub', title: 'Game Hub', icon: MdNorthEast},
    },
    {
        id: 'movie-app',
        title: 'Movie App',
        description: 'A modern platform to get all the latest movies...',
        images: [
          'https://.../proj1-1.jpg',
          'https://.../proj1-2.jpg'
        ],
        featuredImage: 'https://plus.unsplash.com/premium_photo-1730032452988-c8d4df1256c5?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isFeatured: true,
        showInSlideshow: true,
        backgroundColor: '#2a2a2a',
        tileCta: {href: 'https://github.com/giterichub/movie-js-app', ariaLabel: 'movie-app-repository', title: 'Movie App', icon: FaGithub},
        tileIcon: {href: 'https://movie-app-js-snowy.vercel.app/', ariaLabel: 'movie-app-website', title: 'Movie App', icon: MdNorthEast},
      },
      {
        id: 'crosshair',
        title: 'Crosshair',
        description: 'A modern shopping experience...',
        images: [
          'https://.../proj1-1.jpg',
          'https://.../proj1-2.jpg'
        ],
        featuredImage: 'https://images.unsplash.com/photo-1741070487520-907d1359cb95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isFeatured: true,
        showInSlideshow: true,
        backgroundColor: '#2a2a2a',
        tileCta: {href: 'https://github.com/giterichub/Crosshair-landing', ariaLabel: 'crosshair-github-repository', title: 'Crosshair Github Repository', icon: FaGithub},
        tileIcon: {href: 'https://giterichub.github.io/Crosshair-landing/', ariaLabel: 'crosshair website', title: 'Crosshair', icon: MdNorthEast},
      }
    // Other projects...
  ];