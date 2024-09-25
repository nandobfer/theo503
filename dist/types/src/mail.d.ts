import Mail from "nodemailer/lib/mailer";
export declare const sendMail: (destination: string[], subject: string, text?: string, html?: string, attachments?: Mail.Attachment[]) => Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo | undefined>;
