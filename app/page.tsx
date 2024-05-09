import ImageSlider from "@/components/image-slider/image-slider";

export default function Home() {
  return (
    <div className="m-5 text-center">
      <h1 className="text-5xl fraunces my-5">
        NextCoffee Bar
      </h1>
      <div className="space-y-5 text-xl lato">
        <p>
          A Montreal born, innovative cafe where you can enjoy over 20 kinds of gourmet paninis and wraps. Mouth-watering baked goods and a selection of hearty soups and salads. There is something for everyone, from our Fairtrade organic coffee blends roasted from top quality beans and infused with the aromas and flavors that are uniquely NextCoffee, to our wide selection of teas that either calm or invigorate the soul.
        </p>
        <p>
          NextCoffee brings you quality ingredients, impeccable presentation and a fast and friendly service for a convenient and affordable enjoyment at any time of day.
        </p>
      </div>
      <ImageSlider />
    </div>
  );
}
