import Image from "next/image";

import sampleTeas from "@/util/tea";
import TeaItem from "@/components/tea-item";
import fairTradeLogo from "@/assets/fairtrade-logos.webp";
import TeaSelectionsLogo from "@/assets/tea-cups-3000x3000.webp";

export default function CoffeeTea() {
    return (
        <div className="m-5">
            <h1 className="text-5xl text-center fraunces my-5">
                Proudly Fairtrade & Organic
            </h1>
            <div className="space-y-5 text-center text-xl lato">
                <p>NextCoffee is proud to announce that ALL our coffee blends are now certified Fairtrade organic. What does that mean for you? It means more than just a great cup of coffee: It means a fair and just choice for coffee drinkers and for the farmers that cultivate our beans which are pesticide-free, pure, and full of flavor, making NextCoffee coffee a healthier choice for you.</p>
                <p>NextCoffee's roasters have been roasting coffee for NextCoffee U for over 10 years. Over the past decade, we’ve been working diligently to create and refine customized blends of the best Arabica coffee beans available and recognize the importance of giving you a healthier and socially responsible choice.</p>
            </div>
            <Image
                src={fairTradeLogo}
                alt="Coffee"
                width={400}
                className="m-auto my-5"
            />
            <h1 className="text-5xl text-center fraunces my-5">
                Our Tea Selection
            </h1>
            <Image 
                src={TeaSelectionsLogo}
                alt="Tea"
                width={700}
                className="m-auto my-5"
            />
            <div>
                {
                    sampleTeas.map((tea) => (
                        <TeaItem
                            key={tea.name}
                            tea={tea}
                        />
                    ))
                }
            </div>
        </div>
    );
}