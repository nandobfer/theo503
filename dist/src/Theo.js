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
exports.Theo = void 0;
const axios_1 = __importDefault(require("axios"));
const mail_1 = require("./mail");
class Theo {
    constructor() {
        this.url = "https://admin.agencyboz.com";
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.url);
            if (response.status === 503) {
                this.on503();
                return false;
            }
            return true;
        });
    }
    on503() {
        const datetime = new Date();
        console.log('errored, sending mail');
        const text = `${datetime.toLocaleDateString('pt-br')}\n\n`;
        (0, mail_1.sendMail)(['fernando@agenciaboz.com.br', 'mizael@agenciaboz.com.br'], `Servidor morreu - ${text}`, text);
    }
}
exports.Theo = Theo;
