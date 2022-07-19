import Image from 'next/image';
import Slider from 'react-slick';

type SlideBanner = {
    id: string;
    title: string;
    description: string;
    url: string;
};

type Props = {
    slide: SlideBanner[];
};

const SlideBannerMain = ({ slide }: Props) => {
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {slide &&
                slide.map((slide) => (
                    <div key={slide.id} className='relative'>
                        <div className=' flex justify-center items-center '>
                            <div className='absolute z-50 bg-white px-4 sm:px-6 tracking-wider py-2 sm:py-3 font-semibold rounded '>
                                <h4 className='uppercase text-gray-500 text-xs sm:text-sm'>
                                    {slide.title}
                                </h4>
                                <p className='uppercase text-sm sm:text-lg'>{slide.description}</p>
                            </div>
                            <Image
                                src={slide.url}
                                width={800}
                                height={500}
                                objectFit='cover'
                                alt={slide.title}
                                placeholder='blur'
                                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                            />
                        </div>
                    </div>
                ))}
        </Slider>
    );
};

export default SlideBannerMain;
