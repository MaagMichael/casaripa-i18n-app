// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import TruncateText from "./TruncateText";

export default async function About() {
  const t = await getTranslations("WelcomePage");
  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="text-xl">{t("title")}</h1>

      <h1 className="">{t("subtitle")}</h1>

      <TruncateText
        text={t("text")}
        maxLength={200}
      />
    </div>
  );
}
