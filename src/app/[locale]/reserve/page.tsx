// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import roomsReserve from "@/data/rooms.json";
import TruncateText from "../components/TruncateText";
import RoomCard from "../components/RoomCard";
import GoogleCalendar from "../components/GoogleCalendar";

import ButtonContact from "../components/ButtonContact";

interface RoomsReserve {
  id: number;
  images: string[];
  title: string;
  description: string;
}

export default async function Reserve() {
  const t = await getTranslations("ReservePage");
  const MaxChar = 400;

  return (
    <div className="p-4 bg-primary text-secondary md:text-lg">
      {/* <h1 className="">{t("title")}</h1> */}

      <div className="space-y-4">
        {roomsReserve.roomsReserve.map((item: RoomsReserve) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row  md:justify-between bg-primary_light rounded-lg"
          >
            {/* Image placement based on ID */}
            {item.id % 2 === 0 ? (
              // Even ID: Image on the left
              <>
                {/* Image box slider*/}
                <div className="md:w-1/2 xl:w-1/3 flex justify-center md:justify-end items-center  order-2 md:order-1">
                  <RoomCard data={item.images} />
                </div>
                {/* Text box */}
                <div className="space-y-4 md:w-1/2 xl:w-2/3 p-4 flex flex-col justify-center order-1 md:order-2">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>

                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                  <ButtonContact />
                </div>
              </>
            ) : (
              // Odd ID: Image on the right
              <>
                {/* Text box */}
                <div className="space-y-4 md:w-1/2 xl:w-2/3 p-4 flex flex-col justify-center md:order-1 ">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>

                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                  <ButtonContact />
                </div>
                {/* Image box slider*/}
                <div className=" md:w-1/2 xl:w-1/3 flex justify-center md:justify-end items-center md:order-2">
                  <RoomCard data={item.images} />
                </div>
              </>
            )}
          </div>
        ))}

        {/* price information and conditions */}
        <div className="flex flex-col lg:flex-row  justify-between bg-primary_light rounded-lg">
          <div className="p-4 lg:w-1/2">
            <h1 className="text-left font-bold whitespace-pre-line">
              {t("price_title")}
            </h1>
            <h1 className="text-left whitespace-pre-line">{t("price_text")}</h1>
          </div>
          <div className="p-16 lg:p-0">
            <hr />
          </div>
          <div className="p-4 lg:w-1/2">
            <h1 className="text-left font-bold whitespace-pre-line">
              {t("condition_title")}
            </h1>
            <h1 className="text-left whitespace-pre-line">
              {t("condition_text")}
            </h1>
          </div>
        </div>
      </div>

      <GoogleCalendar />
    </div>
  );
}
