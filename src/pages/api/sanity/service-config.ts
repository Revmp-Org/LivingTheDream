import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (!slug || typeof slug !== "string") {
        return res.status(400).json({ error: "Slug is required" });
    }

    try {
        const query = `*[_type == "servicePage" && slug.current == $slug][0]`;
        const params = { slug };
        const data = await client.fetch(query, params);

        if (!data) {
            return res.status(404).json({ error: "Service page not found" });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error("Failed to fetch service page:", error);
        res.status(500).json({ error: "Failed to fetch service page" });
    }
}
