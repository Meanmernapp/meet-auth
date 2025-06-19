// pages/api/infobip/search-number.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ZodError } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { areaCode = "415", country = "US" } = req.query;

    try {
        const response = await axios.get("https://api.infobip.com/phoneNumbers", {
            headers: {
                Authorization: `App ${process.env.INFOBIP_API_KEY}`,
            },
            params: {
                country,
                areaCode,
            },
        });

        return res.status(200).json(response.data);
    } catch (error: any) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                status: "error",
                message: "Validation failed",
                errors: error.errors,
            });
        }

        // Optional: specific custom handling
        if (error.code === "P2002") {
            return res.status(409).json({
                status: "fail",
                message: "Did not find that number",
            });
        }

        return res.status(500).json({
            status: "error",
            message: error?.message || "Internal Server Error",
        });
    }
}
