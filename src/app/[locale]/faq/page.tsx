"use client";
import { useState } from "react";
// import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await

import faqAnswers from "@/data/faq.json";

interface FAQAnswers {
  title: string;
  content: string;
}

// export default async function FAQ() {
export default function FAQ() {
  // const t = await getTranslations("FAQPage");
  // const t = useTranslations("FAQPage");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      {/* <h1 className="">{t("title")}</h1> */}

      <div className="w-full space-y-4">
        {faqAnswers.FAQAnswers.map((item: FAQAnswers, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{item.title}</span>
              <span className="text-xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-primary_light text-secondary border-t">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
