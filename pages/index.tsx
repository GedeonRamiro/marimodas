import type { NextPage } from 'next';
import Header from './components/Header';
import { Slide } from 'react-slideshow-image';
import Banner01 from '../public/images/banner01.jpg';
import Banner02 from '../public/images/banner02.jpg';
import Banner03 from '../public/images/banner03.jpg';
import BannerFeminino from '../public/images/banner-feminino.jpg';
import BannerMasculino from '../public/images/banner-masculino.jpg';
import BannerAcessorios from '../public/images/banner-acessorios.jpg';
import Image from 'next/image';
import Slider from 'react-slick';

const Home: NextPage = () => {
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <>
            <Header>
                <div className='flex gap-4  sm:my-10'>
                    <div className='text-center w-full lg:w-1/2'>
                        <Slider {...settings}>
                            <div className='relative'>
                                <div className=' flex justify-center items-center '>
                                    <div className='absolute z-50 bg-white px-4 sm:px-6 tracking-wider py-2 sm:py-3 font-semibold rounded '>
                                        <h4 className='uppercase text-gray-500 text-[10px] sm:text-sm'>
                                            Banner
                                        </h4>
                                        <p className='uppercase text-xs sm:text-lg'>
                                            Your title banner
                                        </p>
                                    </div>
                                    <Image
                                        src={BannerFeminino}
                                        width={800}
                                        height={500}
                                        objectFit='cover'
                                        alt='Banner01'
                                    />
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={BannerMasculino}
                                    width={800}
                                    height={500}
                                    objectFit='cover'
                                    alt='Banner02'
                                />
                            </div>
                            <div>
                                {' '}
                                <Image
                                    src={Banner03}
                                    width={800}
                                    height={500}
                                    objectFit='cover'
                                    alt='Banner03'
                                />
                            </div>
                        </Slider>
                    </div>
                    <div className='lg:flex lg:flex-col hidden gap-4 lg:w-1/2'>
                        <div className='flex gap-4'>
                            <div className='relative flex  justify-center items-center '>
                                <p className='bg-white px-6 tracking-wider py-3 text-sm font-semibold rounded absolute z-50'>
                                    FEMININO
                                </p>
                                <Image
                                    src={BannerFeminino}
                                    width={400}
                                    height={250}
                                    objectFit='cover'
                                    alt='Banner03'
                                />
                            </div>
                            <div className='relative flex  justify-center items-center '>
                                <p className='bg-white px-6 tracking-wider py-3 text-sm font-semibold rounded absolute z-50'>
                                    MASCULINO
                                </p>
                                <Image
                                    src={BannerMasculino}
                                    width={400}
                                    height={250}
                                    objectFit='cover'
                                    alt='Banner02'
                                />
                            </div>
                        </div>
                        <div className='relative flex  justify-center items-center '>
                            <p className='bg-white px-6 tracking-wider py-3 text-sm font-semibold rounded absolute z-50'>
                                ACESSÓRIOS
                            </p>
                            <Image
                                src={BannerAcessorios}
                                width={800}
                                height={250}
                                objectFit='cover'
                                alt='Banner02'
                            />
                        </div>
                    </div>
                </div>
                {/*    <div className='flex my-10 gap-4'>
                    <div className='lg:w-1/2 w-full'>
                        <Slide easing='ease'>
                            <div className='flex justify-center'>
                                <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                                    <Image
                                        src={BannerFeminino}
                                        width={680}
                                        height={500}
                                        objectFit='cover'
                                        alt='Banner01'
                                    />
                                </div>
                            </div>
                            <div className=' flex justify-center'>
                                <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                                    <Image
                                        src={BannerMasculino}
                                        width={680}
                                        height={500}
                                        objectFit='cover'
                                        alt='Banner02'
                                    />
                                </div>
                            </div>
                            <div className=' flex justify-center'>
                                <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                                    <Image
                                        src={Banner03}
                                        width={680}
                                        height={500}
                                        objectFit='cover'
                                        alt='Banner03'
                                    />
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className='lg:flex lg:flex-col hidden gap-4 lg:w-1/2'>
                        <div className='flex gap-4'>
                            <Image
                                src={BannerFeminino}
                                width={400}
                                height={200}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <Image
                                src={BannerMasculino}
                                width={400}
                                height={200}
                                objectFit='cover'
                                alt='Banner02'
                            />
                        </div>
                        <Image
                            src={BannerAcessorios}
                            width={570}
                            height={290}
                            objectFit='cover'
                            alt='Banner02'
                        />
                    </div>
                </div> */}

                <div className='card w-96 bg-base-100 shadow-xl mt-10'>
                    <div className='card-body'>
                        <h2 className='card-title font-extrabold'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary font-light'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title font-extrabold'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary font-light'>Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title font-extrabold'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary font-light'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title font-extrabold'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary font-light'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title font-extrabold'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary font-light'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl mb-10'>
                    <div className='card-body'>
                        <h2 className='card-title font-extrabold'>Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='card-actions justify-end'>
                            <button className='btn btn-primary font-light'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Home;
