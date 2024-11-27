// https://www.youtube.com/watch?v=74ys-dT94mA
// https://github.com/Sridhar-C-25/ReactTailwind_nav/tree/main

// import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import menuData from "@/data/menu.json";
// import { usePathname } from 'next/navigation';

// In this case, TypeScript is able to infer the type of menuData automatically through type inference
// from the JSON file. When you import a JSON file in TypeScript, it automatically creates an
// implicit type based on the structure of the JSON. So even though there's no explicit interface
// defined, TypeScript understands the shape of menuData as:
// {
//   MenuItems: Array<{
//     label: string;
//     route: string;
//   }>;
// }
// or
// interface MenuItem {
//   label: string;
//   route: string;
// }
// interface MenuData {
//   MenuItems: MenuItem[];
// }

export default function Navigation() {
  // const t = useTranslations("Navigation");
  // const pathname = usePathname();
  // Extract the locale from the pathname (assumes format like /en or /de)
  // const locale = pathname.split('/')[1] || 'en';
  // const menuItems = menuData;

  return (
    <div className="bg-primary flex justify-between items-center w-full sticky top-0 z-10">
      {/* Logo always visible on left side */}
      <Link href="/">
        <Image
          src="/assets/casa-ripa-logo.png"
          width={151}
          height={109}
          alt="Picture of the author"
        />
      </Link>

      {/* Navigation Menu */}
      <div className="">
        {menuData.MenuItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className="text-secondary mx-2 font-bold text-xl px-4 py-2 rounded hover:bg-primary_light"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* button to make as client component */}
      <Link href="/reserve">
        <button
          className="bg-green text-white font-[Poppins] py-2 px-6 rounded hover:bg-primary_light duration-500"
        >
          Reserve now
        </button>
      </Link>

      <button className="text-secondary mx-4">DE/EN</button>
    </div>
  );
}
