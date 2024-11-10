// https://www.youtube.com/watch?v=74ys-dT94mA
// https://github.com/Sridhar-C-25/ReactTailwind_nav/tree/main

"use client";
import React, { useState, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from 'next/image'

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
  // const t = useTranslations("Navigation");

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full sticky top-0 z-10 bg-primary">
      <div className="md:flex items-center justify-between  ">
        {/* Logo always visible on left side */}
        <Link href="/">
          <Image
            src="/assets/casa-ripa-logo.png"
            width={151}
            height={109}
            alt="Picture of the author"
          />
        </Link>
        
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
          <Link href="/reserve">
            <Button>Reserve Now</Button>
          </Link>
          {/* <Link href="/">{t("title")}</Link> */}
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
