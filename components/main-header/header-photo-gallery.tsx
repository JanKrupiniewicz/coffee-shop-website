'use client';

import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
    { image: gallery1, alt: "Coffee" },
    { image: gallery2, alt: "Coffee" },
    { image: gallery3, alt: "Coffee" },
    { image: gallery4, alt: "Coffee" },
];

export default function HeaderPhotoGallery() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevIndex => (
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ));
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <div className="">
            <div className="w-100 h-96 relative overflow-x-hidden">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.image}
                        alt={image.alt}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
                <div className="flex flex-row justify-between absolute top-1/2 w-full">
                    <button
                        className="absolute left-1 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:shadow-xl"
                        onClick={() => setCurrentImage(prevIndex => (
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        ))}
                    >
                        <ArrowBigLeft className="text-stone-700 hover:text-stone-900" size={32} />
                    </button>
                    <button
                        className="absolute right-1 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:shadow-xl"
                        onClick={() => setCurrentImage(prevIndex => (
                            prevIndex === images.length - 1 ? 0 : prevIndex + 1
                        ))}
                    >
                        <ArrowBigRight className="text-stone-700 hover:text-stone-900" size={32} />
                    </button>
                </div>
                <div className="flex flex-row absolute bottom-4 w-full justify-center">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full bg-white bg-opacity-50 mx-1 ${index === currentImage ? "bg-opacity-100" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
    
}