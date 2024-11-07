import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// import '@/app/globals.css'

export default function HomePage() {
  const t = useTranslations("HomePage");

  

  return (
    <div>
      <h1 className="text-red-500">{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>

      

    </div>
  );
}
