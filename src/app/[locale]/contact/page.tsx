import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Contact() {
  const t = useTranslations("ContactPage");

  return (
    <div>
      <h1 className="">{t("title")}</h1>
      <Link href="/">{t("about")}</Link>
    </div>
  );
}
