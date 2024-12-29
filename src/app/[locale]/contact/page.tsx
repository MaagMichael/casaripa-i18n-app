// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await

import ContactForm from "../components/ContactForm";
import GoogleCalendar from "../components/GoogleCalendar";

export default async function Contact() {
  const t = await getTranslations("ContactPage");

  const rooms = {
    type1: t("rooms.type1"),
    type2: t("rooms.type2"),
    type3: t("rooms.type3"),
    type4: t("rooms.type4"),
    type5: t("rooms.type5")
  };

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      {/* <h1 className="">{t("title")}</h1> */}
      <GoogleCalendar />
      <ContactForm send={t("send")} rooms={rooms}/> 
    </div>
  );
}
