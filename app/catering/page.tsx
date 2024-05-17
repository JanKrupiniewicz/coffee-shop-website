import PageHeader from '@/components/page-header';
import ImageGallery from '@/components/image-gallery';

export default function Catering() {
    return (
        <div className="m-5 text-center">
            <PageHeader>
                Catering like you've never seen!
            </PageHeader>
            <div className="space-y-5 m-10 text-xl lato">
                <p>Our chefs can prepare a meal for 10 to 1000 guests, at home, at the office and anywhere in between. Our team has the talent, experience and flexibility to offer creative and innovative services while bringing flair and attention to detail and thus bringing to each event the casual sophistication that is NextCoffee catering.</p>
                <p className="uppercase text-3xl font-bold">
                    For more information, please contact
                </p>
                <p className="text-2xl font-bold">
                    <a href="mailto:someone@example.com">info@NextCoffee.com</a>
                </p>
            </div>
            <ImageGallery />
        </div>
    );
}