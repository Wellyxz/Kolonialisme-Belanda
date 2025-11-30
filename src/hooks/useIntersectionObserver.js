import { useState, useEffect, useRef } from 'react';

/**
 * Hook kustom untuk mendeteksi kapan sebuah elemen masuk ke viewport.
 * @param {object} options Opsi Intersection Observer (root, rootMargin, threshold)
 * @returns {Array} [ref, isVisible]
 */
const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Hanya set isVisible menjadi true sekali saat elemen terlihat
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Opsional: Hentikan observasi setelah terlihat
        observer.unobserve(entry.target); 
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup: Hentikan observasi saat komponen di-unmount
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

export default useIntersectionObserver;