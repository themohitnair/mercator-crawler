import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', async (c) => {
    return c.json({
        message: "Hello from mercator-scraper!"
    })
})

app.get('/scrape', async (c) => {
    const url: string | URL = c.req.query('url') as string
    try {
        new URL(url)
    } catch {
        throw Error("URL is invalid!")
    }
})

app.onError((err, c) => {
    console.error(`${err}`)
    return c.text("An Error occurred.", 500)
})

app.notFound((c) => {
    return c.text('Endpoint not found', 404)
})

export default app