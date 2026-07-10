"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
export default function FirstSection() {
    const stickerRef = useRef(null);
    const [showSticker, setShowSticker] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to(stickerRef.current, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => setShowSticker(false),
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {showSticker && (
                <div
                    ref={stickerRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                   <img
                    src="/gif/s11.gif"
                    alt="Loading..."
                    className="w-40 h-40"
                    />
                </div>
            )}
        </div>
    );
}