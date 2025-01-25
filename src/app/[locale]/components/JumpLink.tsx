"use client";

import React from "react";
// useParams gives you access to dynamic route parameters from the URL. like /en
import { useParams } from "next/navigation";
import Link from "next/link";

interface JumpLinkProps {
  children: React.ReactNode;
  route: string;
}

function JumpLink(data: JumpLinkProps) {
  const params = useParams();

  return (
    <Link
      href={`/${params.locale}${data.route}`}
      className="text-secondary font-bold text-xl px-4 md:px-2 py-2 rounded hover:bg-primary duration-500"
    >
      {data.children}
    </Link>
  );
}
export default JumpLink;
