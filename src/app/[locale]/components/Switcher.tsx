// https://dev.to/adrianbailador/guide-to-internationalisation-i18n-in-nextjs-with-routing-3kje

"use client";
// usePathname returns the full current path including the locale prefix. For example:
// If you're on the homepage in English: /en/home
import { Locale, routing, usePathname } from "@/i18n/routing";

// useParams gives you access to dynamic route parameters from the URL. like /en
import { useRouter, useParams } from "next/navigation";

// useLocale returns only the current active language
// code the page you are on:
// If you're on any English page: en
import { useLocale } from "next-intl";

import { ChangeEvent, useTransition } from "react";

export default function Switcher() {
  const pathname = usePathname();
//   const params = useParams();

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // console.log(nextLocale);
    startTransition(() => {
      router.replace(
        `/${nextLocale}${pathname.replace(`/${localActive}`, "")}`
      );
    });
  };

  return (
      <select
        defaultValue={localActive}
        className="bg-transparent p-1 text-secondary border-2 rounded"
        onChange={onSelectChange}
        disabled={isPending}
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
  );
}
