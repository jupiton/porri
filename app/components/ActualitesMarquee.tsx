"use client";
import React, { useEffect, useState } from "react";

export default function ActualitesMarquee() {
  const [news, setNews] = useState<string[]>([]);

  useEffect(() => {
    // Charger dynamiquement les actualités (ici statique, mais prêt pour API plus tard)
    setNews([
      "📰 Paella du 12 août : plus de renseignements au 04 95 40 40 44, places limitées !"
    ]);
  }, []);

  if (news.length === 0) {
    // Loader léger
    return (
      <div className="w-full bg-yellow-100 border-b-2 border-yellow-400 py-2 text-yellow-900 text-center animate-pulse">
        Chargement des actualités…
      </div>
    );
  }

  return (
    <div className="w-full bg-yellow-100 border-b-2 border-yellow-400 py-2 overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none bg-gradient-to-r from-yellow-100 via-transparent to-yellow-100 z-10" />
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {news.map((text, idx) => (
          <span
            key={idx}
            className="text-yellow-900 font-semibold text-lg px-8"
          >
            {text}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {news.map((text, idx) => (
          <span
            key={idx + "-dup"}
            className="text-yellow-900 font-semibold text-lg px-8"
            aria-hidden="true"
          >
            {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
} 