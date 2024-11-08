import { OpenAPIRoute } from "chanfana"
import { ScrapeRes, URLReq } from "../types"

export class Crawl extends OpenAPIRoute {
    schema = {
        tags: ["Routes"],
        summary: "Scrapes a given website (query param URL)",
        request: {
            query: URLReq
        },
        responses: {
            "200": {
                description: "Returns the scraped data",
                content: {
                    "application/json": {
                        schema: ScrapeRes,
                    },
                },
            },
            "400": {
                description: "Invalid URL or request data",
            },
            "500": {
                description: "Internal server error",
            },
        },
    }

    async handle(c) {
        const data = await this.getValidatedData<typeof this.schema>();

        const url = data.query.url

        try {
            // const scrapeResult = await this.runCrawler(url);

            return c.json({
                url,
                success: true,
                // data: scrapeResult,
            })
        } catch (error) {
            console.error("Error scraping website:", error);
            return c.status(500).json({
                success: false,
                message: "Failed to scrape the website.",
            })
        }
    }
}
