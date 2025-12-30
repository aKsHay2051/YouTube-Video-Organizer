"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/firebase";

export default function Analytics() {
    useEffect(() => {
        // Firebase Analytics automatically logs page_view events in standard setups.
        // However, ensuring the `analytics` object is imported and initialized on the client is key.
        if (typeof window !== "undefined" && analytics) {
            // You can add custom event logging here if needed in the future
        }
    }, []);

    return null;
}
