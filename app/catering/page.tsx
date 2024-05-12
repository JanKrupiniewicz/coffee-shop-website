import Image from 'next/image';

import applePie from '@/assets/apple-pie.webp';
import chocolateCake from '@/assets/chocolate-cake.webp';
import strawberryCheesecake from '@/assets/strawberry-cheesecake.webp';
import chocolateSwirlCake from '@/assets/chocolate-swirl-cake.webp';

export default function Catering() {
    return (
        <div className="m-5 text-center">
            <h1 className="text-5xl fraunces my-5">
                Catering like you've never seen!
            </h1>
            <div className="space-y-5 m-10 text-xl lato">
                <p>Our chefs can prepare a meal for 10 to 1000 guests, at home, at the office and anywhere in between. Our team has the talent, experience and flexibility to offer creative and innovative services while bringing flair and attention to detail and thus bringing to each event the casual sophistication that is NextCoffee catering.</p>
                <p className="uppercase text-3xl font-bold">
                    For more information, please contact
                </p>
                <p className="text-2xl font-bold">
                    <a href="mailto:someone@example.com">info@NextCoffee.com</a>
                </p>
            </div>
            <div className='flex flex-col justify-center items-center lg:flex-row'>
                <div className='flex flex-row m-2 space-x-4'>
                    <Image
                        src={applePie}
                        alt="Apple Pie"
                        width={200}
                    />
                    <Image
                        src={chocolateCake}
                        alt="Chocolate Cake"
                        width={200}
                    />
                </div>
                <div className='flex flex-row m-2 space-x-4'>
                    <Image
                        src={strawberryCheesecake}
                        alt="Strawberry Cheesecake"
                        width={200}
                    />
                    <Image
                        src={chocolateSwirlCake}
                        alt="Chocolate Swirl Cake"
                        width={200}
                    />
                </div>
            </div>
        </div>
    );
}