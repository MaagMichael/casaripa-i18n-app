// import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";

import Welcome from "./components/Welcome";
import HeroImage from "./components/HeroImage";
import ActivityExtract from "./components/ActivityExtract";
import Review from "./components/Review";
import GoogleMap from "./components/GoogleMap";
// import Colordesign from "./components/Colordesign";

// import '@/app/globals.css'

export default async function HomePage() {
  // const t = await getTranslations("HomePage");

  return (
    <div>
      <HeroImage />
      
      {/* <h1 className="text-primary">{t("title")}</h1> */}


      <Welcome />

      <ActivityExtract />

      <Review />

      <GoogleMap />

      {/* <Colordesign/> */}

    </div>
  );
}
