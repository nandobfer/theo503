import axios from "axios"
import { sendMail } from "./mail"

export class Theo {
    url: string

    constructor() {
        this.url = "https://portal.casaludica.com.br/entrar/"
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
        const text = `${datetime.toLocaleDateString("pt-br")}\n\n`
        console.log(`${text} - errored, sending mail`)
        sendMail(
            [
                "fernando@agenciaboz.com.br",
                "mizael@agenciaboz.com.br",
                "luiz@agenciaboz.com.br",
                "vih@agenciaboz.com.br",
                "alfredo@agenciaboz.com.br",
                "ildo@agenciaboz.com.br",
            ],
            `Servidor morreu - ${text}`,
            text
        )
    }
}