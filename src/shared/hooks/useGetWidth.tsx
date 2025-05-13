'use client'; // Важно добавить для хуков, использующих браузерные API

import { useState, useEffect } from 'react';

export const useGetWidth = () => {
  const [width, setWidth] = useState(0); 

  useEffect(() => {
    
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    
    updateWidth();

    
    window.addEventListener('resize', updateWidth);

    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []); 

  return width;
};