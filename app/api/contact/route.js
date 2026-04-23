// app/api/contact/route.js
// ─────────────────────────────────────────────
// Receives multipart form data (text fields + image files),
// sends an email with images as attachments via Nodemailer.
//
// Install:  npm install nodemailer
// ─────────────────────────────────────────────

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // must be Node runtime for nodemailer + file handling

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");
    const images = formData.getAll("sitePictures");

    // ── Convert uploaded files to Nodemailer attachments ──
    const attachments = await Promise.all(
      images.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      }),
    );

    // ── Nodemailer transporter ──
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "mail.m-architectpvt.com"
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ── Send ──
    await transporter.sendMail({
      from: `"M-Architect Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Project Enquiry — ${service || "General"} from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#2c1a12">
          <h2 style="color:#8f5a34;margin-bottom:4px">New Enquiry</h2>
          <hr style="border:none;border-top:1px solid #e3ccb0;margin:12px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#73462c;width:120px"><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td style="padding:6px 0;color:#73462c"><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td style="padding:6px 0;color:#73462c"><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#73462c"><strong>Service</strong></td><td>${service || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e3ccb0;margin:12px 0"/>
          <p style="color:#73462c"><strong>Message</strong></p>
          <p style="white-space:pre-wrap;background:#faf6f1;padding:12px;border-radius:8px">${message || "—"}</p>
          ${images.length > 0 ? `<p style="color:#73462c;margin-top:16px">${images.length} site picture(s) attached.</p>` : ""}
        </div>
      `,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
