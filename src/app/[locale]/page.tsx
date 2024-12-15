// import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";

import Welcome from "./components/Welcome";
import HeroImage from "./components/HeroImage";
import ActivityExtract from "./components/ActivityExtract";
import Review from "./components/Review";
import GoogleMap from "./components/GoogleMap";

export default async function HomePage() {
  return (
    <div>
      <HeroImage />
      
      {/* <h1 className="text-primary">{t("title")}</h1>
      <p className="text-primary">{t("subtitle.sub1")}</p>
      <p className="text-primary">{t("subtitle.sub2")}</p> */}


      <Welcome />

      <ActivityExtract />

      <Review />

      <GoogleMap />

      {/* <Colordesign/> */}
    </div>
  );
}