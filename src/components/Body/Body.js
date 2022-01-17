import { useState, useEffect } from 'react';

import { Resume } from '../Resume/Resume';
import { ResumePlaceholder } from '../ResumePlaceholder/ResumePlaceholder';

const Body = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < 1200 ? <ResumePlaceholder /> : <Resume />;
};

export { Body };
