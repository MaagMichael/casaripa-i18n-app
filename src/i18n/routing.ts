// https://dev.to/adrianbailador/guide-to-internationalisation-i18n-in-nextjs-with-routing-3kje

import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de", "nl"],

  // Used when no locale matches
  defaultLocale: "en",
  // rename pathnames depending on language to be more content specific
  // pathnames: {
  //   "/contact": {
  //     en: "/contact-me",
  //     fr: "/contactez-moi",
  //     de: "/kontaktiere-mich",
  //   },
  // },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
