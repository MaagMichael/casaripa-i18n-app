"use client";

import Link from "next/link";
// useParams gives you access to dynamic route parameters from the URL. like /en
import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

export default function ButtonContact() {
  const t = useTranslations("ReservePage");
  const params = useParams();

  return (
    <Link href={`/${params.locale}/contact`}>
      <button className="bg-green text-white  p-2 rounded hover:bg-primary duration-500">
        {t("request")}
      </button>
    </Link>
  );
}
