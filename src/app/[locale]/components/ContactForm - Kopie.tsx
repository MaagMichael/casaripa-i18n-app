// https://www.ali-dev.com/blog/next-js-email-sending-with-app-router-and-emailjs
// In the EmailJS dashboard, go to Account > Security and check 'Allow EmailJS API for non-browser applications.'

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
  
  const sendEmail = async (fromData: FormData) => {
    "use server";

    // console.log(fromData);

    const room_selected = fromData.get("room_selected");
    const user_name = fromData.get("user_name");
    const user_email = fromData.get("user_email");
    const user_phone = fromData.get("user_phone");
    const user_message = fromData.get("user_message");

    if (
      !room_selected ||
      !user_name ||
      !user_email ||
      !user_phone ||
      !user_message
    ) {
      console.log("Please fill out all fields");
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          accessToken: process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN!,
          template_params: {
            room_selected,
            user_name,
            user_email,
            user_phone,
            user_message,
          },
        }),
      });
      console.log(res);

      if (!res.ok) {
        throw new Error("Failed to send email", { cause: res.status });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <form action={sendEmail}
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
