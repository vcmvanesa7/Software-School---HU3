import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createEmailTemplate } from "@/utils/emailTemplate";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const userMail = process.env.MAIL_USER;
    const passMail = process.env.MAIL_PASS;

    if (!userMail || !passMail) {
      throw new Error("Faltan las credenciales del correo (MAIL_USER o MAIL_PASS).");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userMail,
        pass: passMail,
      },
    });


    const mensajeHtml = createEmailTemplate();


    const logoPath = path.resolve("public/kirin-art-logo.png");

    await transporter.sendMail({
      from: `"Kirin Art School" <${userMail}>`,
      to: email,
      subject: "🎨 Welcome at Kirin Art School",
      html: mensajeHtml,
      attachments: [
        {
          filename: "kirin-art-logo.png",
          path: logoPath,
          cid: "kirin-art-logo", 
        },
      ],
    });

    return NextResponse.json({ success: true, message: "Email sent successfully 🎉" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
