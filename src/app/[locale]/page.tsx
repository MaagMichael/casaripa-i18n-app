// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";

import Welcome from "./components/Welcome";
import HeroImage from "./components/HeroImage";
import Review from "./components/Review";
import GoogleMap from "./components/GoogleMap";

// import '@/app/globals.css'

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <HeroImage />
      
      <h1>Home</h1>
      <h1 className="text-primary">{t("title")}</h1>


      <Welcome />

      <Review />

      <GoogleMap />

      <div className="flex flex-wrap justify-center gap-4 p-4 text-secondary">
        <div className="w-[100px] h-[300px] bg-primary">#1d232a</div>
        <div className="w-[100px] h-[300px] bg-primary_light">#2a323c</div>
        <div className="w-[100px] h-[300px] bg-secondary text-black">#a2a9b6</div>
        <div className="w-[100px] h-[300px] bg-orange text-black">#d59c2a</div>
        <div className="w-[100px] h-[300px] bg-green text-black">#608a28</div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4 bg-primary">
        <div className="w-[100px] h-[300px] bg-primary"></div>
        <div className="w-[100px] h-[300px] bg-primary_light"></div>
        <div className="w-[100px] h-[300px] bg-secondary"></div>
        <div className="w-[100px] h-[300px] bg-orange"></div>
        <div className="w-[100px] h-[300px] bg-green"></div>
      </div>

    </div>
  );
}
