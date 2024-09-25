"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "agencyboz.com",
    port: 587,
    secure: false,
    auth: {
        user: "loucaselisas@agencyboz.com",
        pass: "^lbo!kh@kDILPquP",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
});
const sendMail = (destination, subject, text, html, attachments) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: "Theo <theo@agencyboz.com>",
        to: destination,
        subject,
        html,
        text,
        attachments,
    };
    try {
        const response = yield transporter.sendMail(mailOptions);
        return response;
    }
    catch (error) {
        console.log("error sending mail");
        console.log({ destination });
        console.log(error);
    }
});
exports.sendMail = sendMail;
