"use client";

// import { useState } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface RoomCardProps {
  data: string[];
}

export default function RoomCard({ data }: RoomCardProps) {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const currentRoom = data[currentRoomIndex];
  // console.log("currentRoom", currentRoom);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentRoomIndex(
  //       (prevIndex) => (prevIndex + 1) % data.length
  //     );
  //   }, 7000); // Change image every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // decrease Index
  const nextSlide = () => {
    setCurrentRoomIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };
  // increase Index
  const prevSlide = () => {
    setCurrentRoomIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className="p-4 rounded-lg relative max-h-[45vh]">
      <Image
        src={currentRoom}
        alt={currentRoom}
        width={1200}
        height={900}
        className="h-full w-full object-cover rounded-lg max-h-[40vh]"
      />

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary_light text-secondary py-2 px-1 rounded-lg"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary_light text-secondary py-2 px-1 rounded-lg"
      >
        &gt;
      </button>

      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentRoomIndex(index)}
            className={`
              w-3 h-3 rounded-full ${
                index === currentRoomIndex ? "bg-orange" : "bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
