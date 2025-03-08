export interface Image {
    name: string;
    alt: string;
    url: string;
  }
  
  export interface SlideShowContent {
    imageLinks: Image[];
  }

export const slideShowContent: SlideShowContent = {
    imageLinks: [
      { 
        name: 'image-1',
        alt: 'Abstract art composition',
        url: 'https://images.unsplash.com/photo-1741290723082-bd54c16a21a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        name: 'image-2',
        alt: 'Colorful geometric pattern',
        url: 'https://plus.unsplash.com/premium_photo-1730032452988-c8d4df1256c5?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        name: 'image-3',
        alt: 'Modern architectural detail',
        url: 'https://images.unsplash.com/photo-1741070487520-907d1359cb95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ]
  };