// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await

export default async function NewsBlog() {

  const t = await getTranslations("HomePage");

  

  return (
    <div className="p-4 bg-primary text-secondary text-center">
      <h1 className="text-red-500 text-xl font-bold">{t("news_title")}</h1>

      <h1 className=" text-lg whitespace-pre-line ">{t("news_text")}</h1>

      {/* <TruncateText
        text={t("text")}
        maxLength={MaxChar}
      /> */}
    </div>
  );
}
