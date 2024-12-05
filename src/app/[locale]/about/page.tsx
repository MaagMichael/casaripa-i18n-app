// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";
import GoogleMap from "../components/GoogleMap";

export default async function About() {
  const t = await getTranslations("AboutPage");
  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="text-xl">{t("title")}</h1>

      

      
      <GoogleMap />
    </div>
  );
}
