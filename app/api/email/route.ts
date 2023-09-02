import { NextResponse } from 'next/server';
import { Resend } from 'resend'
import React from 'react';

import ContactFormEmail from '@/app/email/contactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(
  request: Request
) {
  const body = await request.json()
  const senderEmail = body.email
  const senderName = body.name
  const message = body.message

  if (!message || typeof message !== 'string') {
    throw Error("Invalid Message")
  }

  const email = await resend.emails.send({
    from: `Contact Form <my-portfolio@resend.dev>`,
    to: 'khaituong2909@gmail.com',
    subject: 'Message from contact form',
    reply_to: senderEmail,
    react: React.createElement(ContactFormEmail, {
      message,
      senderEmail,
      senderName
    })
  });

  return NextResponse.json(email)
}