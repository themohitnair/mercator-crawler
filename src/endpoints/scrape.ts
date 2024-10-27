import { Bool, OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { ScrapeRes, URLReq } from "../types";

export class Scrape extends OpenAPIRoute {
    schema = {
        tags: ["Routes"],
        summary: "Scrapes a given website (query param URL)",
        request: {
            body: {
                content: {
                    "application/json": {
                        schema: URLReq,
                    },
                },
            },
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
    };

    async handle(c) {
        const data = await this.getValidatedData<typeof this.schema>();

        const url = data.body.url;

        try {
            const scrapeResult = await this.scrapeWebsite(url);

            return c.json({
                url,
                success: true,
                data: scrapeResult,
            });
        } catch (error) {
            console.error("Error scraping website:", error);
            return c.status(500).json({
                success: false,
                message: "Failed to scrape the website.",
            });
        }
    }

    async scrapeWebsite(url: string) {
        // Implementation
        return {
            "/": "<html>...home page content...</html>",
            "/about": "<html>...about page content...</html>",
            "/contact": "<html>...contact page content...</html>",
        };
    }
}
