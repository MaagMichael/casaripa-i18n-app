"use client";

import Image from "next/image";
import { useState } from "react";

export default function GoogleMap() {
  const [confirmed, setConfirmed] = useState(false);

  const confirm = () => {
    alert("Now connecting to Google maps...");
    setConfirmed(true);
  };
  return (
    <div className="h-full w-full p-4 bg-primary">
      {confirmed ? (
        <iframe
          className="sm:w-2/3 w-full h-[60vh] mx-auto rounded-lg"
          src="https://maps.google.com/maps?q=Casa%20Ripa,%20Via%20Ripa%209,%2060034%20Cupramontana%20(AN&t=&z=17&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      ) : (
        <div className="sm:w-2/3 w-full h-[60vh] mx-auto relative">
          <Image
            src="/assets/map_cover.webp"
            alt="location map of Casa Ripa"
            width={1160}
            height={684}
            className="object-cover w-full h-full rounded-lg"
          />
          <Image
            src="/assets/map_label.webp"
            alt="adress of of Casa Ripa"
            width={1160}
            height={684}
            className="object-contain w-1/3 lg:w-1/4 absolute top-4 left-4"
          />

          <button
            onClick={confirm}
            className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 bg-green text-white  p-2 rounded hover:bg-primary_light duration-500"
          >
            Google Maps
          </button>
        </div>
      )}
    </div>
  );
}
