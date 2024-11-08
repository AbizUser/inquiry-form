import { EmailTemplate } from "@/components/email-template"
import { NextResponse } from "next/server"
import React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
// const mailAddress = process.env.YOUR_MAIL_ADDRES

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["aman.biz.t23@gmail.com"],
      subject: "開発のご相談",
      react: EmailTemplate({
        username:"test",
        email:"test@gmail.com",
        content:"開発のご相談です。"
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