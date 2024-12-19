// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";
import Image from "next/image";
import GoogleMap from "../components/GoogleMap";

export default async function About() {
  const t = await getTranslations("AboutPage");
  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="text-xl text-center">{t("title")}</h1>

      <p className="text-justify">{t("text-order.subtext01")}</p>
      {/* <p className="text-justify whitespace-pre-line">{t("text2")}</p> */}

      <div className="flex flex-col md:flex-row gap-6 items-center bg-primary_light rounded-lg">
        {/* Image box */}
        <div className="order-1 ">
          <Image
            src="/assets/about/about01.webp"
            alt="Bild"
            width={960}
            height={1280}
            // fill
            className=" object-contain w-full h-full max-h-96"
          />
        </div>

        {/* Text box */}
        <div className="order-2 space-y-4 p-4">
          {/* <h1 className="text-xl font-bold">xxxx</h1> */}
          <p className="text-justify whitespace-pre-line">
            {t("text-order.subtext02")}
          </p>
        </div>
      </div>

      <div className="order-2 space-y-4 p-4">
        <p className="text-justify whitespace-pre-line">
          {t("text-order.subtext03")}
        </p>
        <p className="text-center font-bold">{t("text-order.subtext04")}</p>
      </div>

      <GoogleMap />
    </div>
  );
}
