import { useRef, useEffect } from 'react';

const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // mutable refs so handlers don't rebind every render
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // convert vertical wheel to horizontal
      const delta = Math.sign(e.deltaY);
      el.scrollLeft += delta * 40;
      e.preventDefault();
    };

    const startDrag = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
      el.classList.add('grabbing');
    };

    const duringDrag = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 2; // drag speed
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    const endDrag = () => {
      isDraggingRef.current = false;
      el.classList.remove('grabbing');
    };

    // optional: touch support
    let touchStartX = 0;
    let touchStartScrollLeft = 0;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      touchStartX = t.pageX;
      touchStartScrollLeft = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      const dx = t.pageX - touchStartX;
      el.scrollLeft = touchStartScrollLeft - dx;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('mousedown', startDrag);
    el.addEventListener('mousemove', duringDrag);
    el.addEventListener('mouseup', endDrag);
    el.addEventListener('mouseleave', endDrag);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    el.addEventListener('touchend', endDrag);

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('mousedown', startDrag);
      el.removeEventListener('mousemove', duringDrag);
      el.removeEventListener('mouseup', endDrag);
      el.removeEventListener('mouseleave', endDrag);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', endDrag);
    };
  }, []);

  return scrollRef;
};

export default useHorizontalScroll;
