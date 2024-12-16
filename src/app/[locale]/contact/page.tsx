// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";
import ContactForm from "../components/ContactForm";

export default async function Contact() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      {/* <h1 className="">{t("title")}</h1>
      <h1 className="">{t("send")}</h1> */}
      <ContactForm send={t("send")}/> 
    </div>
  );
}
