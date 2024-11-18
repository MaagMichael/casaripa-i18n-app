"use client";

import heroImages from "@/data/hero.json";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroImage {
  label: string;
  url: string;
}

export default function HeroImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroImages.HeroImage.length
      );
    }, 7000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages.HeroImage[currentImageIndex];

  return (
    <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] relative">
      
      <Image
        className="animate-fadeIn bg-primary"
        key={currentImageIndex}
        src={currentImage.url}
        alt={currentImage.label}
        //   width={4032}
        //   height={3042}
        fill
        style={{ objectFit: "cover", transition: "opacity 0.5s ease-in-out" }}
      />
      {/* ))} */}
      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.HeroImage.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`
              w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-orange" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
