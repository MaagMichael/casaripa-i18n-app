"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

// useParams gives you access to dynamic route parameters from the URL. like /en
import { useParams } from "next/navigation";
import Switcher from "./Switcher";

interface NavMobilProps {
  data: {
    label: string;
    route: string;
  }[];
}

function NavigationMobil({ data }: NavMobilProps) {
  //   console.log("data", data);
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="relative w-10 h-8 flex flex-col justify-between items-center group focus:outline-none"
        >
          <span className="h-1 w-full bg-secondary rounded transform transition duration-300 ease-in-out group-hover:bg-primary_light"></span>
          <span className="h-1 w-full bg-secondary rounded transform transition duration-300 ease-in-out group-hover:bg-primary_light"></span>
          <span className="h-1 w-full bg-secondary rounded transform transition duration-300 ease-in-out group-hover:bg-primary_light"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary w-full h-full overflow-hidden flex flex-col items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-8 h-0.5 bg-secondary transform rotate-45 absolute"></span>
            <span className="block w-8 h-0.5 bg-secondary transform -rotate-45 absolute"></span>
          </button>

          <Link href="/" className="">
            <Image
              src="/assets/casa-ripa-logo.png"
              width={151}
              height={109}
              alt="Picture of the author"
              priority
            />
          </Link>

          <div onClick={toggleMenu}>
            {data.map((item, index) => (
              <Link
                key={index}
                href={`/${params.locale}${item.route}`}
                className="flex flex-col text-secondary  font-bold text-xl px-4 py-2 rounded hover:bg-primary_light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavigationMobil;
