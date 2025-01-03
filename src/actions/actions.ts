"use server";

export async function sendEmail(previousState, fromData: FormData) {

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
      !user_message
    ) {
      return "Please fill out all required fields";
      // console.log("Please fill out all required fields");
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
      // console.log(res);

    } catch (error) {
      return "Error sending email. Please contact by phone.";
    }

  };