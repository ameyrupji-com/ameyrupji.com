import React, { useEffect, useRef, useState } from 'react';
import './StarTwinkle.scss';

import logos from './timeline-logos.png';
import logosDark from './timeline-logos-grayscale.png';

interface StarTwinkleProps {
  starWidth?: number;
  starHeight?: number;
  starMargins?: number;
  starImageCount?: number;
  children?: React.ReactNode;

}

const StarTwinkle = ({
  starWidth = 100,
  starHeight = 100,
  starMargins = 40,
  starImageCount = 6,

  children
}: StarTwinkleProps) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Calculate number of stars needed
  const imageWidthPadded = starWidth + (starMargins * 2);
  const imageHeightPadded = starHeight + (starMargins * 2);
  const boxesX = Math.ceil(dimensions.width / imageWidthPadded);
  const boxesY = Math.ceil(dimensions.height / imageHeightPadded);
  const totalStars = boxesX * boxesY;


  // Generate stars with random properties
  const generateStars = () => {
    const stars = Array.from({ length: totalStars }, (_, index) => ({
      id: index,
      imageCount: Math.floor(Math.random() * starImageCount),
      animationDelay: `${Math.random() * 9}s`,
    }));
    
    // Shuffle array using Fisher-Yates algorithm
    return stars.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    containerRef.current.style.setProperty('--star-image-url', `url(${logos})`);
    containerRef.current.style.setProperty('--star-dark-image-url', `url(${logosDark})`);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className='star-twinkle-container' ref={containerRef}>
      <div 
        className="background-images-container"
        style={{
          height: dimensions.height,
          overflow: 'hidden'
        }}
        >
        {dimensions.width > 0 && generateStars().map(star => (
          <div
            key={star.id}
            className={`star animate-flicker`}
            style={{
              width: starWidth,
              height: starHeight,
              margin: starMargins,
              animationDelay: star.animationDelay,
              backgroundPosition: `-${starWidth * star.imageCount}px 0px`
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};


export default StarTwinkle; 