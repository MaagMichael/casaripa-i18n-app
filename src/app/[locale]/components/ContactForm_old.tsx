// https://www.ali-dev.com/blog/next-js-email-sending-with-app-router-and-emailjs

// due to useRef in ContactForm.tsx, this file is client side
"use client";

import { useRef, FormEvent } from "react";

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
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formRef.current);

    if (!formRef.current) {
      return;
    }

    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      // Do not allow headless browsers
      blockHeadless: true,
    });
    
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            `Verification email was sent successfully to your email ${formRef.current?.user_email.value}. Please check your email account, as well spam folder.`
          );
          // Reset the form after successful submission
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert(`email failed to sent - ${error.text}`);
        }
      );
  };

  return (
    <>
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
            // required
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

        <p>* required / notwendig / noodzakelijk</p>
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
