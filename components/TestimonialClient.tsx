import Image from 'next/image';
import Slider from 'react-slick';
import personIcon from '../public/images/person-icon.png';

type Testimonial = {
    id: string;
    name: string;
    testimonial: string;
    image: string | null;
    date: string;
};

type Props = {
    testimonials: Testimonial[];
};

const TestimonialClient = ({ testimonials }: Props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {testimonials &&
                testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='h-full text-center px-0 sm:px-4'>
                        <Image
                            width={80}
                            height={80}
                            alt='testimonial'
                            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                            src={testimonial.image || personIcon}
                            placeholder='blur'
                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                        />
                        <p className='leading-relaxed text-sm'>{testimonial.testimonial}</p>
                        <span className='inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4'></span>
                        <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                            {testimonial.name}
                        </h2>
                        <p className='text-gray-500 text-xs'>{testimonial.date}</p>
                    </div>
                ))}
        </Slider>
    );
};

export default TestimonialClient;
