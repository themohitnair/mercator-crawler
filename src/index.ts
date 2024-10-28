import { fromHono } from "chanfana";
import { Hono } from "hono";
import { Crawl } from "endpoints/crawl";

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/crawl", Crawl)

// Export the Hono app
export default app;
