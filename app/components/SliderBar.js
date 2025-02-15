'use client';
import { useState, useEffect } from 'react';
import styles from './SliderBar.module.css';

export default function SliderBar() {
  const messages = ['Perfect Product', 'Expert Service', 'Best Price'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 7000); // 3-second cycle
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className={styles.sliderBar}>
      <div className={styles.sliderItem}>
        {messages[currentIndex]}
      </div>
    </div>
  );
}
