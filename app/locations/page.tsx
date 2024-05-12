import LocationItem from "@/components/location-item";
import sampleLocations from "@/util/sampleLocations";

export default function Locations() {
    return (
        <div className="container mx-auto m-5">
            <h1 className="text-center text-5xl fraunces my-5">
                Start Earning Points Today!
            </h1>
            <p className="text-center text-xl lato">
                The NextCoffee Points Program has been designed for you to earn points for the purchases you make at participating NextCoffee locations. As a member of our app and loyalty program, you can earn points, collect visits towards free NextCoffee beverages and receive special limited time offers. For full program details and rules, please see our Terms & Conditions.
            </p>
            <div className="flex flex-col items-center space-y-8 m-12">
                {
                    sampleLocations.map((location) => (
                        <LocationItem
                        key={location.name}
                        location={location}
                        />
                    ))
                }
            </div>
        </div>
    );
}