"use server";

export async function sendEmail(
  previousState: { error: string; data: string },
  formData: FormData
): Promise<{ error: string; data: string }> {

  // console.log(formData);

  const room_selected = formData.get("room_selected") as string;
  const user_name = formData.get("user_name") as string;
  const user_email = formData.get("user_email") as string;
  const user_phone = formData.get("user_phone") as string;
  const user_message = formData.get("user_message") as string;

  if (!room_selected || !user_name || !user_email || !user_message) {
    return { error: "Please fill out all required fields", data: "" };
  }

  try {
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
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
    return { error: "", data: "Email sent out successfully, you should receive a copy to your own email." };
  } catch  {
    return {
      ...previousState,
      error: "Error sending email. Please contact by phone.",
      data: "",
    };
  }
}
