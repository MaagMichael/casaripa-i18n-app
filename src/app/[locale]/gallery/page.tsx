import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Gallery() {
  const t = useTranslations("GalleryPage");

  return (
    <div>
      <h1 className="">{t("title")}</h1>
      <Link href="/">{t("about")}</Link>
    </div>
  );
}
