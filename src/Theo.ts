import axios from "axios"
import { sendMail } from "./mail"

export class Theo {
    url: string

    constructor() {
        this.url = "https://admin.agencyboz.com"
        console.log(`initializing theo503 for ${this.url}`)
    }

    async test() {
        const response = await axios.get(this.url)
        if (response.status === 503) {
            this.on503()
            return false
        }

        return true
    }



    on503() {
        const datetime = new Date()
        console.log('errored, sending mail')
        const text = `${datetime.toLocaleDateString('pt-br')}\n\n`
        sendMail(['fernando@agenciaboz.com.br', 'mizael@agenciaboz.com.br'], `Servidor morreu - ${text}`, text)
    }
}