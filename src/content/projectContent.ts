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
      id: 'project-1',
      title: 'E-commerce Platform',
      description: 'A modern shopping experience...',
      images: [
        'https://.../proj1-1.jpg',
        'https://.../proj1-2.jpg'
      ],
      featuredImage: 'https://.../proj1-main.jpg',
      isFeatured: true,
      showInSlideshow: true,
      backgroundColor: '#2a2a2a'
    },
    // Other projects...
  ];