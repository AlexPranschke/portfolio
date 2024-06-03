'use client'

import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Carousel.module.css";

interface CarouselProps {
  children: ReactNode;
  itemsPerPage: number;
}

export default function Carousel({ children, itemsPerPage }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(React.Children.count(children) / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, React.Children.count(children));

  return (
    <div className="w-[10%]">
    <div className={styles.carouselContainer}>
      <button onClick={prevSlide}>&lt; Prev</button>
      <div className={`${styles.carousel} `}>
        <AnimatePresence >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {React.Children.toArray(children).slice(startIndex, endIndex)}
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={nextSlide}>Next &gt;</button>
    </div>
    </div>
  );
}

