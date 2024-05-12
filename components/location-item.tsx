import { Location } from '@/util/types';

export default function LocationItem({ location }: { location: Location }) {
    return (
        <div className='flex flex-col border-y border-gray-900 p-2 lg:flex-row lg:border-none'>
            <div>
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address1 + ',' + location.address2)}&maptype=roadmap`}
                    width="400"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                >
                </iframe>
            </div>
            <div className="m-5">
                <h1 className="text-2xl uppercase fraunces">
                    {location.name}
                </h1>
                <div className="text-lg space-y-3 lato">
                    <div>
                        <p className='text-xl font-bold'>
                            A d d r e s s
                        </p>
                        <p>{location.address1}</p>
                        <p>{location.address2}</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>
                            P h o n e
                        </p>
                        <p>{location.phone}</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>
                            H o u r s
                        </p>
                        <p>Monday-Friday: {location.openHoursMF}</p>
                        <p>Saturday: {location.openHoursSat}</p>
                        <p>Sunday: {location.openHoursSun}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}