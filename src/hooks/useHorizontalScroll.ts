import { useRef, useState, useEffect } from 'react';

const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse wheel handler
  const handleWheel = (e: WheelEvent) => {
    if (scrollRef.current) {
      const delta = Math.sign(e.deltaY);
      scrollRef.current.scrollLeft += delta * 20; // Adjust scroll speed
      e.preventDefault();
    }
  };

  // Mouse down handler
  const startDrag = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse move handler
  const duringDrag = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Cleanup dragging
  const endDrag = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    
      // Wheel event
      element.addEventListener('wheel', handleWheel, { passive: false });
      
      // Mouse events for dragging
      element.addEventListener('mousedown', startDrag);
      element.addEventListener('mousemove', duringDrag);
      element.addEventListener('mouseup', endDrag);
      element.addEventListener('mouseleave', endDrag);

    return () => {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('mousedown', startDrag);
        element.removeEventListener('mousemove', duringDrag);
        element.removeEventListener('mouseup', endDrag);
        element.removeEventListener('mouseleave', endDrag);
    };
  }, [isDragging, startX, scrollLeft]);

  return scrollRef;
};

export default useHorizontalScroll;