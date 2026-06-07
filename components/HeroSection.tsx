"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./HeroSection.module.css";

const SLIDES = [
  SITE_CONFIG.images.banners.banner1,
  SITE_CONFIG.images.banners.banner2,
  SITE_CONFIG.images.banners.banner3,
  SITE_CONFIG.images.banners.banner4,
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const setSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.carouselContainer}`}>
        <div className={styles.carouselWrapper}>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.carouselLink}
          >
            <div className={styles.sliderList}>
              {SLIDES.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${
                    index === currentIndex ? styles.activeSlide : ""
                  }`}
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    visibility: index === currentIndex ? "visible" : "hidden",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    priority={index === 0}
                    className={styles.slideImage}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className={`${styles.arrow} ${styles.prevArrow}`}
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <button
              className={`${styles.arrow} ${styles.nextArrow}`}
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              ❯
            </button>

            {/* Pagination Dots */}
            <div className={styles.dotsContainer}>
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ""
                  }`}
                  onClick={(e) => setSlide(index, e)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
