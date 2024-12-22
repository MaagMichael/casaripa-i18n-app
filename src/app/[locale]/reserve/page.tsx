// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import roomsReserve from "@/data/rooms.json";
import Image from "next/image";
import TruncateText from "../components/TruncateText";

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
      <h1 className="">{t("title")}</h1>

      <div className="space-y-4">
        {roomsReserve.roomsReserve.map((item: RoomsReserve) => (
          // {{const images = roomsReserve.roomsReserve.image}}
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:min-h-[40vh] justify-between bg-primary_light rounded-lg"
          >
            {/* Image placement based on ID */}
            {item.id % 2 === 0 ? (
              // Even ID: Image on the left
              <>
                {/* Image box slider*/}
                <div className="relative md:w-1/2 lg:w-1/3 flex items-center justify-center order-2 md:order-1">
                  {item.images.map((image:string) => (
                    <Image
                      src={image}
                      alt={image}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover rounded-b-lg md:rounded-l-lg md:rounded-br-none"
                    />
                  ))}
                </div>
                {/* Text box */}
                <div className="md:w-1/2 lg:w-2/3 p-4 flex flex-col justify-center order-1 md:order-2">
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
                <div className="md:w-1/2 lg:w-2/3 p-4 flex flex-col justify-center md:order-1 ">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                </div>
                {/* Image box slider*/}
                <div className="relative md:w-1/2 lg:w-1/3 flex items-center justify-center md:order-2">
                  {/* <Image
                    src={item.image}
                    alt={t(item.title)}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                  /> */}
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
