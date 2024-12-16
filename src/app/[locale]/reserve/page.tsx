// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import Image from "next/image";

export default async function Reserve() {
  const t = await getTranslations("ReservePage");

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="">{t("title")}</h1>
      <Image
        className="max-w-md mx-auto"
        src="/dummycalendar.png"
        alt="/dummycalendar.png"
        width={4032}
        height={3042}
      />
    </div>
  );
}
