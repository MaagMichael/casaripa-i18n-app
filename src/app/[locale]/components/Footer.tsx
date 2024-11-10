import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="bg-gray-400">
      <h1>{t("title")}</h1>
      <h1 className="">here goes the Footer</h1>
    </div>
  );
}
