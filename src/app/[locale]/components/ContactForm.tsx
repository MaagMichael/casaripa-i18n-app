'use client';

import { useRef, FormEvent } from 'react';

// import { sendEmail } from '@/app/api/send-email/route';
type textProps = {
  send: string;
};

export default function ContactForm(data:textProps) {
  console.log(data.send);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const formProps = Object.fromEntries(formData);

    try {
      const response = await sendEmail(formProps);

      if (response.success) {
        // Reset form
        formRef.current?.reset();
        alert('success');
      } else {
        alert('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('error');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Text
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        {data.send}
      </button>
    </form>
  );
}
