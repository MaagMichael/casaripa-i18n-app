// import { MetadataRoute } from 'next'

// const locales = ['en', 'es', 'fr'] // Your supported locales
// const baseUrl = 'https://www.example.com'

// export default function sitemap(): MetadataRoute.Sitemap {
//   // Generate sitemap entries for each locale
//   const localizedRoutes = locales.flatMap(locale => [
//     {
//       url: `${baseUrl}/${locale}`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/${locale}/about`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/${locale}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.5,
//     }
//   ])

//   // Optional: Add alternate language links for each route
//   const alternateLinks = localizedRoutes.flatMap(route => 
//     locales.map(locale => ({
//       url: route.url.replace(`/${locale}`, `/${locale}`),
//       lastModified: route.lastModified,
//       alternateRefs: locales.map(altLocale => ({
//         href: route.url.replace(`/${locale}`, `/${altLocale}`),
//         hreflang: altLocale
//       }))
//     }))
//   )

//   return [
//     ...localizedRoutes,
//     ...alternateLinks
//   ]
// }
// Placement in project structure: 
// app/
//  ├── [lang]/
//  │ ├── about/
//  │ ├── contact/
//  │ └── page.tsx
//  ├── sitemap.ts // Place at the root of the app directory
//  └── layout.tsx

import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://casaripa.com'
  const baseUrl = 'https://casaripa.com'

  // Define supported languages
  const languages = ['en', 'de' , 'nl']
  
  // Base routes that are common across languages
  const routes = [
    '',
    '/about',
    '/activity',
    '/gallery',
    '/contact',
    '/faq',
    '/reserve',
    '/impressum',
    '/dsvgo',
  ]

  // Generate entries for all language/route combinations
  const entries = languages.flatMap(lang => 
    routes.map(route => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  return entries
}

// npm run build

// Copy

// Execute

// npm run start

// Copy

// Execute

// The sitemap will be available at:

// /sitemap.xml
// /robots.txt