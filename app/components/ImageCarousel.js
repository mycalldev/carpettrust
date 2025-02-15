import React, { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';
import Image from 'next/image';

export default function ImageCarousel() {
  const images = [
    {
      src: '/carpet_image1.png',
      title: 'First Slide',
      description: 'This is the first slide description',
    },
    {
      src: '/laminate_image1.png',
      title: 'Second Slide',
      description: 'This is the second slide description',
    },
    {
      src: '/vinyl_image1.png',
      title: 'Third Slide',
      description: 'This is the third slide description',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle to the next image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const isLastSlide = prevIndex === images.length - 1;
        return isLastSlide ? 0 : prevIndex + 1;
      });
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);
 
  return (
    <div className={styles.carouselContainer}>
      <div
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        className={styles.carouselSlide} 
       > 
      
        {/* Text overlay */}
        <div className={styles.carouselOverlay}>
          <h2>Flooring Specialists in Sales & Lettings Properties</h2>
        </div>
        </div>
    
    </div>
  );
}
