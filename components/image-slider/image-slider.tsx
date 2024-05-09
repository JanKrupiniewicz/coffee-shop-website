'use client';

import { useState } from "react";
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

export default function ImageSlider() {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="">
            <div className="image_slider">
                <Image
                    src={images[currentImage].image}
                    alt={images[currentImage].alt}
                    className="w-full h-full object-cover hover:opacity-70"
                />
            </div>
        </div>
    );
}