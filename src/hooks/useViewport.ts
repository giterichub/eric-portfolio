import { useEffect, useState } from "react";

const useViewport = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      
      const handleResize = () => {
        setIsMobile(mediaQuery.matches);
      };
  
      // Initial check
      handleResize();
      
      // Add listener
      mediaQuery.addEventListener('change', handleResize);
  
      // Cleanup
      return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);
  
    return { isMobile };
  };
  export default useViewport;