"use client";

import React from "react";
// useParams gives you access to dynamic route parameters from the URL. like /en
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  route: string;
}

function NavLink(data: NavLinkProps) {
  const params = useParams();
  const pathname = usePathname();

  return (
    <Link
      href={`/${params.locale}${data.route}`}
      className="text-secondary  font-bold text-xl px-4 md:px-2 py-2 rounded hover:bg-primary duration-500"
      // check for active link
    >
        <div className={`${pathname === `/${params.locale}${data.route}`
          ? "border-b-2 border-green"
          : "no-underline"
      }`}>

      {data.label}
        </div>
    </Link>
  );
}

export default NavLink;
