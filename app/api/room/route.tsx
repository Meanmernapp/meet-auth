// pages/api/create-room.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { DAILY_API_KEY = "" } = process.env;

    try {
        const response = await axios.post(
            "https://api.daily.co/v1/rooms",
            {
                properties: {
                    enable_chat: true,
                    enable_knocking: false,
                    start_video_off: false,
                    start_audio_off: false,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${DAILY_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return res.status(200).json({ url: response.data.url });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}
