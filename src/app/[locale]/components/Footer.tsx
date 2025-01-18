// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <div className="bg-primary_light text-secondary md:text-lg py-4">
      {/* <h1 className="text-center">{t("title")}</h1> */}

      <div className="flex flex-col md:flex-row justify-around ">
        <div className="flex flex-col space-y-4 p-4">
          <p className="text-xl">{t("title")}</p>

          <Link href="/about">{t("aboutcasaripa")}</Link>
          <Link href="/about">{t("route")}</Link>
          <Link href="/faq">{t("faq")}</Link>
          <Link href="/gallery">{t("gallery")}</Link>
          <Link href="/">Admin</Link>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <p className="text-xl">{t("contact")}</p>

          <p>Ferienhaus Casa Ripa</p>
          <p>Alexander Mohamed</p>
          {/* <p>Tannenweg 46</p> */}
          <p>85399 Hallbergmoos</p>
          <p>casaripa.cupra(at)gmail.com</p>
          <p>(0049) 179 294 64 32</p>
          <p className="font-bold">CIN IT042016C2FG8XNF78 | CIR 042016-AFF-00003</p>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <p className="text-xl">Follow Us</p>

          <div className="flex flex-row space-x-4">
            <Link
              href="https://www.instagram.com/casaripa.cupra/"
              target="_blank"
            >
              <Image
                src="/assets/instagram-167.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>

            <Link
              href="https://www.facebook.com/pg/Casa-Ripa-Holiday-Home-110086234177655"
              target="_blank"
            >
              <Image
                src="/assets/facebook-176.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center">
        Copy right @ CASA RIPA, Italy - Created with ReDI School Munich, 2024
      </p>
    </div>
  );
}
