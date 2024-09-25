import { Theo } from "./src/Theo"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
    const theo = new Theo()

    while (await theo.test()) {
        await delay(1000 * 60 * 1)
    }

}


main()