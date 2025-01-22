"use client";
import ButtonToTop from "./ButtonToTop";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

// useParams gives you access to dynamic route parameters from the URL. like /en
import { useParams } from "next/navigation";

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
    <div>
      {!isOpen && (
        <>
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-between items-center group focus:outline-none"
          >
            <span className="h-1 w-full bg-secondary rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
            <span className="h-1 w-full bg-secondary rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
            <span className="h-1 w-full bg-secondary rounded transform transition duration-300 ease-in-out group-hover:bg-primary"></span>
          </button>
          <ButtonToTop />
        </>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary py-4 w-full h-full overflow-y-scroll flex flex-col items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-8 h-0.5 bg-secondary transform rotate-45 absolute"></span>
            <span className="block w-8 h-0.5 bg-secondary transform -rotate-45 absolute"></span>
          </button>

          <Link href={`/${params.locale}`} onClick={toggleMenu}>
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
                className="flex flex-col text-secondary  font-bold text-xl p-4"
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
