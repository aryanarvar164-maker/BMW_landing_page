import Image, { StaticImageData } from "next/image";
import { CircleArrowRight  } from 'lucide-react';

export default function Card({
    title,
    description,
    image,
}: {
    title: string;
    description: string;
    image: StaticImageData;
}) {
    return (
        <div className="relative overflow-hidden group h-[700px]">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className=" ml-50 absolute bottom-16 left-16 text-white flex flex-col items-center justify-center ">
                <p className="text-lg">{description}</p>

                <h2 className="text-4xl font-bold mt-3">
                    {title}
                </h2>
                <h3 className="flex items-center gap-2 mt-4 hover:underline">
                    Discover more
                    <CircleArrowRight  size={25} />
                </h3>
            </div>
        </div>
    );
}