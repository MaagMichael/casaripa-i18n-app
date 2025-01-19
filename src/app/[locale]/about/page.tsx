// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";
import Image from "next/image";
import GoogleMap from "../components/GoogleMap";

export default async function About() {
  const t = await getTranslations("AboutPage");
  return (
    <div className="bg-primary text-secondary md:text-lg p-4 space-y-4">
      <h1 className="text-xl text-center">{t("title")}</h1>

      <p className="text-justify">{t("text-order.subtext01")}</p>
      {/* <p className="text-justify whitespace-pre-line">{t("text2")}</p> */}

      <div className="flex flex-col md:flex-row md:max-h-[72vh] justify-between bg-primary_light rounded-lg">
        {/* Image box */}
        <div className="relative md:w-1/2 lg:w-1/3 flex items-center justify-center order-2 md:order-1">
          <Image
            src="/assets/about/about01.webp"
            alt="Bild"
            width={960}
            height={1280}
            // fill
            className="h-full w-full object-cover rounded-b-lg md:rounded-l-lg md:rounded-br-none"
          />
        </div>

        {/* Text box */}
        <div className="md:w-1/2 lg:w-2/3 p-4 flex flex-col justify-center order-1 md:order-2 pl-4">
          <p className="text-justify whitespace-pre-line ">
            {t("text-order.subtext02")}
          </p>
          <br />
          <p className="text-left whitespace-pre-line">
            {t("text-order.subtext03")}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* <p className="text-left whitespace-pre-line">
          {t("text-order.subtext03")}
        </p> */}
        <p className="text-center font-bold">{t("text-order.subtext04")}</p>
      </div>

      <GoogleMap />
    </div>
  );
}
