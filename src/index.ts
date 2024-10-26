import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
    return c.json({
        message: "Mercator Scraper says hello!"
    })
})

export default app