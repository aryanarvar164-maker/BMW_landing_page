"use client"
import "./style.css";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useState, useRef } from "react";
import "@google/model-viewer";
import {Space_Grotesk, Inter} from "next/font/google";

const space = Space_Grotesk({
  weight: "700",
  subsets: ["latin"],
});
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});


export default function CarModels() {
    const cars1 = useRef(null)
    const heading1 = useRef(null)
    const paragraph1 = useRef(null)
    const cars = [
        "/model/bmw_m4_gt3.glb",
        "/model/free_bmw_m3_e30.glb",
        "/model/2020_bmw_750li_xdrive.glb",
    ];
    const heading = ["Launched in 2022, the M4 GT3 replaced the M6 GT3, ushering in a new era of BMW M Motorsport.",
            "Introduced in 1986, the BMW M3 E30 was built to homologate BMW's touring car racing program.",
            "Introduced in 2019, the BMW 750Li xDrive combined flagship luxury with advanced technology and all-wheel drive."]

    const paragraph = [
        "The M4 GT3 has achieved success in major GT championships, including IMSA, DTM, and the Nürburgring 24 Hours, earning global recognition for performance.",
        "The M3 E30 became the most successful touring car of its era, winning the DTM Championship, World Touring Car Championship, European Touring Car Championship, and numerous endurance races worldwide.",
        "The 750Li xDrive set a benchmark for executive luxury, offering exceptional comfort, cutting-edge driver assistance, refined V8 performance, and BMW's renowned xDrive system for confident all-weather driving."
    ]
    const [current, setCurrent] = useState(0);
    React.useEffect(() => {
        gsap.fromTo(
            heading1.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", }
        );
        gsap.fromTo(
            paragraph1.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        );
        gsap.fromTo(
            cars1.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.4 }
        );
    
    
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % cars.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [current]);
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <button
                onClick={() => setCurrent((prev) => (prev - 1 + cars.length) % cars.length)}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-50
                 h-16 w-16 rounded-full
                 border border-white/30
                 bg-white/10 backdrop-blur-2xl
                 flex items-center justify-center
                 hover:bg-white hover:text-black
                 transition-all duration-300"
            >
                <ChevronLeft size={30} />
            </button>

            {/* Right Button */}
            <button
                onClick={() => setCurrent((prev) => (prev + 1) % cars.length)}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-50
                 h-16 w-16 rounded-full
                 border border-white/30
                 bg-grey/10 backdrop-blur-2xl
                 flex items-center justify-center
                 hover:bg-grey hover:text-black
                 transition-all duration-300"
            >
                <ChevronRight size={30} />
            </button>
            <div className="center basis-full">
                <div
                    className="center-part1"

                >
                    <h1 ref={heading1} className={ `${space.className} text-4xl font-bold` }>
                        {heading[current]}
                    </h1>
                    <p ref={paragraph1} className={ `${inter.className} text-lg` }>
                        {paragraph[current]}
                    </p>
                    {/* <button>Book a Consultation</button> */}
                </div>
                <div className="center-part2">
                    {/* @ts-ignore -- model-viewer is a custom element */}
                    <model-viewer
                        ref={cars1}
                        src={cars[current]}
                        autoplay
                        camera-controls
                        touch-action="pan-y"
                        disable-zoom
                        camera-orbit="30deg 75deg 95%"
                        min-camera-orbit="auto 75deg auto"
                        max-camera-orbit="auto 75deg auto"
                    />
                </div>
            </div>
            <div className="absolute bottom-19 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
                {cars.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full transition-all duration-300 ${current === index
                                ? "w-4 h-4 bg-red-600"
                                : "w-3 h-3 bg-gray-400 hover:bg-grey-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}