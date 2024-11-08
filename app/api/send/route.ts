import { EmailTemplate } from "@/components/email-template"
import { NextResponse } from "next/server"
import React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
// const mailAddress = process.env.YOUR_MAIL_ADDRES

export async function POST(request: Request) {
  const { username, subject, email, content } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["aman.biz.t23@gmail.com"],
      subject: subject,
      react: EmailTemplate({
        username,
        email,
        content,
      }) as React.ReactElement,
    });
    if (error) {
      return NextResponse.json({ error })
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}