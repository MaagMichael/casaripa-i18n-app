import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// import '@/app/globals.css'

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      {/* use css color variables */}
      <h1 className="text-primary">{t("title")}</h1>
    </div>
  );
}
