// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";

export default async function Activity() {
  const t = await getTranslations("ActivityPage");

  return (
    <div>
      <h1 className="">{t("title")}</h1>
      <Link href="/">{t("about")}</Link>
    </div>
  );
}
