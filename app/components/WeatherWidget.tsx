'use client';

import { useState, useEffect } from 'react';

export default function WeatherWidget() {
  const [temperature, setTemperature] = useState(22);

  useEffect(() => {
    // Simulation de température pour Porri (données typiques)
    const updateTemperature = () => {
      // Température typique pour Porri en été
      const baseTemp = 22;
      const variation = Math.floor(Math.random() * 6) - 3; // ±3°C
      setTemperature(baseTemp + variation);
    };

    updateTemperature();
    const interval = setInterval(updateTemperature, 300000); // Mise à jour toutes les 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center ml-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/30">
      <span className="text-2xl mr-2">☀️</span>
      <span className="font-bold text-lg">
        {temperature}°C
      </span>
    </div>
  );
} 