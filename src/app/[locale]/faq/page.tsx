import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function FAQ() {
  const t = useTranslations("FAQPage");

  return (
    <div>
      <h1 className="">{t("title")}</h1>
      <Link href="/">{t("about")}</Link>
    </div>
  );
}
