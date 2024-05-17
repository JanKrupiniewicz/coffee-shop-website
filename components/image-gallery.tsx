'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import applePie from '@/assets/apple-pie.webp';
import chocolateCake from '@/assets/chocolate-cake.webp';
import strawberryCheesecake from '@/assets/strawberry-cheesecake.webp';
import chocolateSwirlCake from '@/assets/chocolate-swirl-cake.webp';
import { randomInt } from 'crypto';
import { get } from 'http';

export default function ImageGallery() {
    return (
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col justify-center items-center lg:flex-row'
        >
            <div className='flex flex-row m-2 space-x-4'>
                <motion.div
                    whileHover={{ scale: 1.05, rotate: Math.random() * 10 }}
                    whileTap={{ scale: 0.9 }}

                >
                    <Image
                        src={applePie}
                        alt="Apple Pie"
                        width={200}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05, rotate: Math.random() * 10 }}
                    whileTap={{ scale: 0.9 }}

                >
                    <Image
                        src={chocolateCake}
                        alt="Chocolate Cake"
                        width={200}
                    />
                </motion.div>
            </div>
            <div className='flex flex-row m-2 space-x-4'>
                <motion.div
                    whileHover={{ scale: 1.05, rotate: Math.random() * 10 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image
                        src={strawberryCheesecake}
                        alt="Strawberry Cheesecake"
                        width={200}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: Math.random() * 10 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image
                        src={chocolateSwirlCake}
                        alt="Chocolate Swirl Cake"
                        width={200}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}