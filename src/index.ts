import { fromHono } from "chanfana"
import { Hono } from "hono"
import { Crawl } from "endpoints/crawl"

const app = new Hono()

const openapi = fromHono(app, {
	docs_url: "/",
});

openapi.get("/api/crawl", Crawl)

export default app
