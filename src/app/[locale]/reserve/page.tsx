// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";

export default async function Reserve() {
  const t = await getTranslations("ReservePage");

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="">{t("title")}</h1>
      <Link href="/">{t("about")}</Link>      
    </div>
  );
}
