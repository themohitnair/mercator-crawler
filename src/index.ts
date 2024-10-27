import { fromHono } from "chanfana";
import { Hono } from "hono";
import { Scrape } from "endpoints/scrape";

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/scrape", Scrape)

// Export the Hono app
export default app;
