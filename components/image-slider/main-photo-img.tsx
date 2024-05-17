import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface MainPhotoImgProps {
    IMAGES: { image: StaticImageData; alt: string }[];
    currentImage: number;
}

export default function MainPhotoImg({IMAGES, currentImage} : MainPhotoImgProps) {
    return (
        <div className="relative" style={{ paddingBottom: '66.66667%' }}>
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 w-full h-full bg-gray-100"
            >
                <Image
                    src={IMAGES[currentImage].image}
                    alt={IMAGES[currentImage].alt}
                    className="absolute inset-0 w-full h-full object-cover hover:opacity-70 "
                />
            </motion.div>
        </div>
    );
}