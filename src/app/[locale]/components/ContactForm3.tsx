import styles from "../components/Contact.module.css";

export default function ContactPage() {
  // start: sendEmail in SendEmail.ts under /lib and import here
  const sendEmail = async (fromData: FormData) => {
    "use server";

    const fullname = fromData  .get("fullname");
    const email = fromData  .get("email");
    const message = fromData  .get("message");

    if (!fullname && !email && !message) {
      return;
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_ACCESS_TOKEN,
          template_params: {
            fullname,
            email,
            message,
          },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  //   end: sendEmail in SendEmail.ts under /lib and import here

  return (
    <form action={sendEmail} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="fullname">
          Full name
        </label>
        <input type="text" id="fullname" name="fullname" required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea rows={8} id="message" name="message" required />
      </div>
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
}
