// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import roomsReserve from "@/data/rooms.json";
import Image from "next/image";
import TruncateText from "../components/TruncateText";
import RoomCard from "../components/RoomCard";

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
    <div className="p-4 bg-primary text-secondary">
      {/* <h1 className="">{t("title")}</h1> */}

      <div className="space-y-4">
        {roomsReserve.roomsReserve.map((item: RoomsReserve) => (
          // {{const images = roomsReserve.roomsReserve.image}}
          <div
            key={item.id}
            className="flex flex-col md:flex-row  justify-between bg-primary_light rounded-lg"
          >
            {/* Image placement based on ID */}
            {item.id % 2 === 0 ? (
              // Even ID: Image on the left
              <>
                {/* Image box slider*/}
                <div className="w-full h-full md:w-1/2 flex  order-2 md:order-1">
                  <RoomCard data={item.images} />
                </div>
                {/* Text box */}
                <div className="md:w-1/2 p-4 flex flex-col justify-center order-1 md:order-2">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                </div>
              </>
            ) : (
              // Odd ID: Image on the right
              <>
                {/* Text box */}
                <div className="md:w-1/2 p-4 flex flex-col justify-center md:order-1 ">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                </div>
                {/* Image box slider*/}
                <div className=" md:w-1/2 flex  md:order-2">
                  <RoomCard data={item.images} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="">
        <Image
          className="max-w-md mx-auto"
          src="/dummycalendar.png"
          alt="/dummycalendar.png"
          width={4032}
          height={3042}
        />
      </div>
    </div>
  );
}
