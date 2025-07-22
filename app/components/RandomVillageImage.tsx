"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const villageImages = [
  {
    src: "/images/porri-village.jpg",
    alt: "Village de Porri",
    title: "Porri - Village de la Casinca"
  },
  {
    src: "/images/porri-ruelles.jpg",
    alt: "Ruelles traditionnelles",
    title: "Ruelles pittoresques"
  },
  {
    src: "/images/porri-architecture.jpg",
    alt: "Architecture traditionnelle",
    title: "Architecture corse"
  },
  {
    src: "/images/porri-place.jpg",
    alt: "Place du village",
    title: "Place centrale"
  }
];

export default function RandomVillageImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  useEffect(() => {
    // Choisir l'image aléatoirement côté client uniquement
    setCurrentImageIndex(Math.floor(Math.random() * villageImages.length));
  }, []);

  const changeImage = () => {
    setCurrentImageIndex(Math.floor(Math.random() * villageImages.length));
  };

  if (currentImageIndex === null) {
    // Loader ou placeholder
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-100 text-gray-400 rounded-2xl shadow-lg">
        Chargement de l’image…
      </div>
    );
  }

  const currentImage = villageImages[currentImageIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
      <div className="aspect-video relative">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold mb-1">{currentImage.title}</h3>
          <p className="text-sm opacity-90">D&#39;couvrez l&#39;authenticit&#233; de la Corse</p>
        </div>
        {/* Bouton pour changer l'image */}
        <button
          onClick={changeImage}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          title="Voir une autre image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
} 