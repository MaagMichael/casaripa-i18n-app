// import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";

export default async function Footer() {
  // const t = await getTranslations("Footer");

  return (
    <div className="bg-primary_light text-secondary py-4">
      {/* <h1 className="text-center">{t("title")}</h1> */}

      <div className="flex flex-col lg:flex-row justify-around ">
        <div className="flex flex-col space-y-4 p-4">
          <p className="text-xl">Find out more</p>

          <Link href="/about">About CASA RIPA</Link>
          <Link href="/about">Route to Us</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/">Admin</Link>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <p className="text-xl">Contacts</p>

          <p>Ferienhaus Casa Ripa</p>
          <p>Jasmin Ghubbar</p>
          <p>Tannenweg 46</p>
          <p>85399 Hallbergmoos</p>
          <p>casaripa.cupra(at)gmail.com</p>
          <p>(0049) 179 294 64 32</p>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          <p className="text-xl">Follow Us</p>

          <div className="flex flex-row space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-center">
        Copy right @ CASA RIPA, Italy - Created with ReDI School Munich, 2024
      </p>
    </div>
  );
}
