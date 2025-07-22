"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';
import WeatherWidget from './WeatherWidget';
import ActualitesMarquee from "./ActualitesMarquee";

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/images/porri-carousel-1.jpg",
    "/images/porri-carousel-2.jpg",
    "/images/porri-carousel-3.jpg",
    "/images/porri-carousel-4.jpg",
    "/images/porri-carousel-5.jpg",
    "/images/porri-carousel-6.jpg",
    "/images/porri-carousel-7.jpg",
    "/images/porri-carousel-8.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Sélecteur de langue en haut à droite */}
      <div className="absolute top-4 right-6 z-30">
        <LanguageSelector />
      </div>
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={image}
              alt={`Village de Porri - Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-2xl">
            {t('hero.title')}
          </h1>
          <WeatherWidget />
        </div>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-lg">
          {t('hero.subtitle')}
        </p>
        <button 
          onClick={() => scrollToSection('accueil')}
          className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105 cursor-pointer"
        >
          {t('hero.discover')}
        </button>
        {/* Retirer le LanguageSelector d'ici */}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Debug Info (temporaire) */}

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection('accueil')}
          className="bg-transparent border-none cursor-pointer select-none"
          aria-label="Faire défiler vers le bas"
        >
          <svg width="48" height="48" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24" aria-label="Flèche vers le bas">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
} 