import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } from '$env/static/private';

type SendEmailInput = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

function isConfigured(): boolean {
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM);
}

function createTransport() {
  const portNum = Number(SMTP_PORT);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: portNum,
    secure: portNum === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
}

export async function sendEmail({ to, subject, text, html }: SendEmailInput) {
  if (!isConfigured()) {
    console.warn('[email] SMTP not configured. Set SMTP_* env vars to enable email.');
    return { ok: false };
  }
  const transporter = createTransport();
  const info = await transporter.sendMail({
    from: SMTP_FROM,
    to,
    subject,
    text,
    html
  });
  return { ok: true, messageId: info.messageId };
}


