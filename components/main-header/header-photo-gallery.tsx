'use client';

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import NavigationButton from "./navigation-button";
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

    const handlePrevClick = () => {
        setCurrentImage(prevIndex => (
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        ));
    };

    const handleNextClick = () => {
        setCurrentImage(prevIndex => (
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ));
    };

    return (
        <div className="w-100 h-136 relative overflow-x-hidden">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    alt={image.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                />
            ))}
            <div className="flex flex-row justify-between absolute top-1/2 w-full">
                <NavigationButton 
                    onClick={handlePrevClick}
                    direction="left"
                    icon= {
                        <ArrowLeft 
                            className="text-stone-800 hover:text-stone-900" 
                            size={52} 
                        />
                    }
                />
                <NavigationButton
                    onClick={handleNextClick}
                    direction="right"
                    icon={
                        <ArrowRight
                            className="text-stone-800 hover:text-stone-900" 
                            size={52} 
                        />} 
                />
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
    );
}