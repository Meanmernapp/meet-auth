"use client"
import React, { useEffect, useRef, useState } from "react";
import DailyIframe, { DailyCall } from "@daily-co/daily-js";

const Meeting = () => {
    const callRef = useRef<DailyCall | null>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const [meetingUrl, setMeetingUrl] = useState<string | null>(null);

    useEffect(() => {
        const getRoom = async () => {
            const res = await fetch("/api/room");
            const data = await res.json();
            setMeetingUrl(data.url);
        };

        getRoom();
    }, []);

    useEffect(() => {
        if (meetingUrl && videoRef.current && !callRef.current) {
            const callFrame = DailyIframe.createFrame(videoRef.current, {
                showLeaveButton: true,
                iframeStyle: {
                    width: "100%",
                    height: "100%",
                },
            });

            callRef.current = callFrame;
            callRef.current.join({ url: meetingUrl });
        }

        return () => {
            callRef.current?.leave();
        };
    }, [meetingUrl]);

    return (
        <div className="w-screen h-screen">
            <div ref={videoRef} className="w-full h-full" />
        </div>
    );
};

export default Meeting;
