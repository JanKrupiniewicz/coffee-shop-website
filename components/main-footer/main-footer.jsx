import Image from 'next/image';

import facebook from '@/assets/icons/facebook.png';
import twitter from '@/assets/icons/twitter.png';
import instagram from '@/assets/icons/instagram.png';

export default function MainFooter() {
    return (
        <footer className="bg-stone-500 p-8 text-white text-center">
            <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <Image
                        src={facebook}
                        alt="Facebook"
                        width={50}
                        height={50}
                    ></Image>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <Image
                        src={instagram}
                        alt="Instagram"
                        width={50}
                        height={50}
                    ></Image>
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <Image
                        src={twitter}
                        alt="Twitter"
                        width={50}
                        height={50}
                    ></Image>
                </a>
            </div>
        </footer>
    );
}