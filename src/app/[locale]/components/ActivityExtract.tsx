// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";

export default async function ActivityExtract() {
  const t = await getTranslations("ActivityExtract");

  return (
    <div>
      <h1 className="">{t("title")}</h1>
      
    </div>
  );
}
