import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
    return c.json({
        message: "Hello from mercator-scraper!"
    })
})

export default app