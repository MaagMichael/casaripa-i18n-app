// https://www.ali-dev.com/blog/next-js-email-sending-with-app-router-and-emailjs
// In the EmailJS dashboard, go to Account > Security and check 'Allow EmailJS API for non-browser applications.'
"use client";

// get server actions defined for this page
// https://www.youtube.com/watch?v=GgyP0_b-WPY
import { sendEmail } from "@/actions/actions";
import { useActionState } from "react";

import {useState, useEffect } from "react";

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
// get translated rooms data from server component /contact/page.tsx
export default function ContactForm({ send, rooms }: ContactFormProps) {
  const [error, action, isPending] = useActionState(sendEmail, null);

  const [errorflag, setErrorflag] = useState(false);

  // Reset error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setErrorflag(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
    setErrorflag(false);
  }, [error,action]);
  
  return (
    <>
      <form action={action} className="space-y-4 max-w-md mx-auto">
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
          disabled={isPending}
          type="submit"
          className="w-full p-2 bg-green hover:bg-primary_light duration-500 text-white rounded"
        >
          {send}
        </button>

        {isPending && <p className="text-green">Sending email...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!isPending && !error && <p className="text-green">E-mail sent out, you should receive a copy to your own email.</p>}
        
      </form>
    </>
  );
}
