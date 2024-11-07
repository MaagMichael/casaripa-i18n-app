// https://www.youtube.com/watch?v=74ys-dT94mA
// https://github.com/Sridhar-C-25/ReactTailwind_nav/tree/main

"use client";
import React, { useState, ReactNode } from "react";
import { Link } from "@/i18n/routing";

interface NavigationItem {
  name: string;
  path: string;
}

const Links: NavigationItem[] = [
  { name: "HOME", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Activities", path: "/activity" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full sticky top-0 z-10 bg-my-bg-color">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo always visible on left side */}
        <img src={"/assets/casa-ripa-logo.png"} alt="Casa ripa logo" />
        {/* <img src="/assets/react.svg" alt=""  /> */}
        {/* Hidden links on medium and large screen */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                href={link.path}
                target="_top"
                className="text-my-text-bright hover:text-my-text-hover duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Reserve button and language always visible on right side */}
        <div>
          <Button>Reserve Now</Button>
          <button className="text-my-text-bright">DE/EN</button>
        </div>

        
      </div>
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
      duration-500"
    >
      {children}
    </button>
  );
};
