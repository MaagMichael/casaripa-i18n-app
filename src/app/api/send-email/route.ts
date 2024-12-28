// import { NextRequest, NextResponse } from 'next/server';
// import { emailjs } from '../../lib/emailjs';

// export async function sendEmail(request: NextRequest) {
  // const { name, email, message } = await request.json();

  // try {
  //   const response = await emailjs.send(
  //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  //     { name, email, message },
  //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  //   );

  //   if (response.status !== 200) {
  //     throw new Error('Failed to send email');
  //   }

  //   return NextResponse.json({ success: true });
  // } catch (error) {
  //   console.error('Error sending email:', error);
  //   return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  // }
// }
