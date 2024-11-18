import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ActivityExtract() {
  const t = useTranslations("ActivityExtract");

  return (
    <div>
      <h1 className="">{t("title")}</h1>
      
    </div>
  );
}
