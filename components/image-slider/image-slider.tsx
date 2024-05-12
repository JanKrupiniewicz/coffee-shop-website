'use client';

import { useState } from "react";
import Image from "next/image";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const SLIDING_ANIMATION_DURATION = 1000;
const IMAGES = [
    { image: gallery1, alt: "Coffee" },
    { image: gallery2, alt: "Coffee" },
    { image: gallery3, alt: "Coffee" },
    { image: gallery4, alt: "Coffee" },
];

export default function ImageSlider() {
    const [currentImage, setCurrentImage] = useState(0);

    function animateChangeImage(nextIndex : number) {
        const timeSlide = SLIDING_ANIMATION_DURATION / Math.abs(currentImage - nextIndex);
        let currentIndex = currentImage;

        for (let i = currentImage; i !== nextIndex; i += nextIndex < currentImage ? -1 : 1) {
            setTimeout(() => {
                currentIndex += nextIndex < currentImage ? -1 : 1;
                setCurrentImage(currentIndex);
            }, timeSlide * Math.abs(currentIndex - i));
        }
    }

    return (
        <div className="flex justify-center items-center my-16">
            <div className="w-2/3">
                <div className="relative" style={{ paddingBottom: '66.66667%' }}>
                <Image
                    src={IMAGES[currentImage].image}
                    alt={IMAGES[currentImage].alt}
                    className="absolute inset-0 w-full h-full object-cover hover:opacity-70 "
                />
                </div>
                <div className="flex flex-row justify-between">
                    {IMAGES.map((image, index) => {
                        const style = index === currentImage ? 
                        'absolute inset-0 w-full h-full object-cover opacity-50' : 
                        'absolute inset-0 w-full h-full object-cover opacity-100';

                        return (
                            <button
                                key={index}
                                className={`w-1/4 bg-white bg-opacity-50 hover:bg-opacity-70`}
                                onClick={() => animateChangeImage(index)}
                            >
                                <div className="p-4 bg-gray-100">
                                    <div className="relative" style={{ paddingBottom: '100%' }}>
                                        <Image
                                            src={image.image}
                                            alt={image.alt}
                                            className={style}
                                        />
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}