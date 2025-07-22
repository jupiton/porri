"use client";
import React, { useEffect, useState } from "react";

export default function ActualitesMarquee() {
  const [news, setNews] = useState<string[]>([]);

  useEffect(() => {
    setNews([
      "📰 Paella du 12 août : plus de renseignements au 04 95 40 40 44, places limitées !"
    ]);
  }, []);

  if (news.length === 0) {
    return (
      <div className="w-full border-b border-white/20 py-2 text-white text-center animate-pulse shadow-lg">
        Chargement des actualités…
      </div>
    );
  }

  return (
    <div className="w-full border-b border-white/20 py-2 overflow-hidden relative shadow-lg">
      <div className="absolute left-0 top-0 h-full w-full pointer-events-none z-10" />
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {news.map((text, idx) => (
          <span
            key={idx}
            className="text-white font-semibold text-lg px-8 drop-shadow-md"
          >
            {text}
          </span>
        ))}
        {news.map((text, idx) => (
          <span
            key={idx + "-dup"}
            className="text-white font-semibold text-lg px-8 drop-shadow-md"
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
          animation: marquee-bounce 18s linear infinite alternate;
        }
        @keyframes marquee-bounce {
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