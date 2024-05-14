import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener('resize', debounce(updateSize, 250));
      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    } else {
      return;
    }
  }, []);
  return size;
};
export default useWindowSize;
