"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {Black_Ops_One} from "next/font/google";
// import MuxPlayer from "@mux/mux-player-react";
import {Rubik} from "next/font/google";

const blacko = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";

import Video from "next-video";

import clip1 from "@/videos/clip_01.mp4.json";
import clip2 from "@/videos/clip-2.mp4.json";
import clip3 from "@/videos/clip-3.mp4.json";
import { LoaderCircle } from "lucide-react";

export default function TopSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  const videos = [clip1, clip2, clip3];
  const headings = ["Pure Motorsport Heritage","The Beginning of Greatness","The Ultimate Driving Machine"];
  const subheadings = ["Racing Legacy","Where Legends Begin","Engineered for Every Curve"];

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className={ `${blacko.className} relative w-full h-screen overflow-hidden isolate` }>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index} className="basis-full">
              {/* isolate = fresh stacking context so the player's own
                  internal z-index can never climb above our overlay/text,
                  no matter what it sets internally */}
              <div className="relative w-full h-screen overflow-hidden isolate">
                <Video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute inset-0 z-0 w-full h-full [--media-object-fit:cover]"
                />
                <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />
                <div className="absolute inset-0 z-20 flex h-full flex-col items-center justify-center text-white pointer-events-none">
                  <h3 className=" mt-100 text-lg md:text-xl">{headings[index]}</h3>
                  <h1 className="text-2xl md:text-6xl font-bold">{subheadings[index]}</h1>
                  <h3 className="mt-4 text-lg md:text-xl">Discover more</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottom Dots */}
      <div className="absolute bottom-11 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            
            className={`rounded-full transition-all duration-300 ${
              current === index
              ? "w-4 h-4 bg-red-600"
              : "w-3 h-3 bg-white/60 hover:bg-white"
              }`
            }
            // <LoaderCircle />
          />
        ))}
      </div>
    </section>
  );
}
