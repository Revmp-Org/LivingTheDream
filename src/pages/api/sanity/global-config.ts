import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const query = `*[_type == "globalConfig"][0]`;
        const data = await client.fetch(query);

        res.status(200).json(data);
    } catch (error) {
        console.error("Failed to fetch global config:", error);
        res.status(500).json({ error: "Failed to fetch global config" });
    }
}
