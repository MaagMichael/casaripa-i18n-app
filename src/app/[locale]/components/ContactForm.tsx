// due to useRef in ContactForm.tsx, this file is client side
"use client";

import { useRef, FormEvent } from "react";
import Image from "next/image";
// import { sendEmail } from "@/app/api/send-email/route";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  send: string;
  rooms: {
    type1: string;
    type2: string;
    type3: string;
    type4: string;
    type5: string;
  };
}

export default function ContactForm({ send, rooms }: ContactFormProps) {
  // console.log(send);
  // console.log(rooms);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    // console.log("formData:", formData);
    const formProps = Object.fromEntries(formData);
    console.log("formProps:", formProps);


    emailjs.init({
      // publicKey: "nHlSdNaHTrzGYLWC0",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      // Do not allow headless browsers
      blockHeadless: true,
    });

    await emailjs
      .sendForm(
        // "service_3aqzjic",
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        // "template_v3wqmyc",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        // formProps,
        formRef.current)
      .then(
        (result) => {
          console.log(result.text);
          formRef.current?.reset();
          alert("email was sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert(`email not sent - ${error.text}`);
        }
      );

  };

  return (
    <>
      <Image
        className="max-w-md mx-auto"
        src="/dummycalendar.png"
        alt="/dummycalendar.png"
        width={4032}
        height={3042}
      />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md mx-auto"
      >
        <div>
          <label htmlFor="room_selected" className="block mb-2">
            Select Room *
          </label>
          <select
            id="room_selected"
            name="room_selected"
            required
            className="w-full p-2 border rounded"
          >
            <option value="">- Select a Room -</option>
            {Object.entries(rooms).map(([key, value]) => (
              <option key={key} value={value} className="text-black">
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="user_name" className="block mb-2">
            Name *
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            placeholder="Name ..."
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block mb-2">
            Email *
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            placeholder="Email ..."
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="user_phone" className="block mb-2">
            Phone
          </label>
          <input
            type="phone"
            id="user_phone"
            name="user_phone"
            //   required
            placeholder="Phone ..."
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="user_message" className="block mb-2">
            Text *
          </label>
          <textarea
            id="user_message"
            name="user_message"
            rows={4}
            required
            placeholder="Text ..."
            className="w-full p-2 border rounded"
          />
        </div>
        {/* from date */}
        {/* to date */}
        {/* room */}

        <button
          type="submit"
          className="w-full p-2 bg-green hover:bg-primary_light duration-500 text-white rounded"
        >
          {send}
        </button>
      </form>
    </>
  );
}
