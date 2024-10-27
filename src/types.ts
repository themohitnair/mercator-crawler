import { z } from "zod";

export const URLReq = z.object({
    url: z.string().url(),
})

export const ScrapeRes = z.object({
    url: z.string().url(),
    success: z.boolean(),
    data: z.record(z.string()),
});