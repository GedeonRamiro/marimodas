import type { NextPage } from 'next';
import Header from './components/Header';
import { Slide } from 'react-slideshow-image';
import Banner03 from '../public/images/banner03.jpg';
import BannerFeminino from '../public/images/banner-feminino.jpg';
import BannerMasculino from '../public/images/banner-masculino.jpg';
import BannerAcessorios from '../public/images/banner-acessorios.jpg';
import BannerPerfume from '../public/images/banner-perfume.jpeg';
import BannerTupperware from '../public/images/banner-tupperware.jpg';
import { GiHanger } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
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
        arrows: false,
    };

    const settingsProduct = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    const settings2 = {
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
        <>
            <Header>
                {/*  SLIDE */}
                <div className='flex gap-4 sm:my-10'>
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
                                OUTROS PRODUTOS
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

                {/* TEXTO ABAIXO DO SLIDE */}
                <section>
                    <div className='lg:flex justify-between text-gray-500 border-b hidden '>
                        <div className='flex items-center mb-6'>
                            <GiHanger size={40} />
                            <div className='text-xs ml-2'>
                                <h4 className='font-bold'>COMPRE AGORA</h4>
                                <p>Receba o produto em casa ou retire direto na loja</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-6'>
                            <FaMoneyCheck size={36} />
                            <div className='text-xs ml-2'>
                                <h4 className='font-bold'>PAGAMENTOS</h4>
                                <p>pix ou via cartão de crédito</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-6'>
                            <AiOutlineFieldTime size={37} />
                            <div className='text-xs ml-2'>
                                <h4 className='font-bold'>SUPORTE 24/7</h4>
                                <p>Entre em contato conosco 24 horas por dia. 7 dias por semana</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CARD PRODUTOS FEMININOS */}

                <section>
                    <blockquote className='flex text-lg sm:text-2xl mt-14 mb-4 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                        <p className='mr-2'>Moda</p>
                        <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                            <span className='relative text-gray-100'>FEMININA</span>
                        </p>
                    </blockquote>

                    {/* CARD PRODUTOS FEMININOS com slide */}

                    <Slider {...settingsProduct} className='sm:hidden'>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-2'>
                                Vestido-Short com detalhes Vestido-Short com detalhes Vestido-Short
                                com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='p-2'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                    </Slider>

                    {/* CARD PRODUTOS FEMININOS sem slide */}
                    <div className='hidden sm:grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 italic lg:grid-cols-4 my-6 mx-4 sm:mx-0'>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-2'>
                                Vestido-Short com detalhes Vestido-Short com detalhes Vestido-Short
                                com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerFeminino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Vestido-Short com detalhes
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 45,50</p>
                        </div>
                    </div>
                    <h4 className='tracking-wider mt-10 sm:mt-0 p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                        VER TUDO
                    </h4>
                </section>

                {/* CARD PRODUTOS MASCULINOS */}

                <section>
                    <blockquote className='flex text-lg sm:text-2xl mt-14 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                        <p className='mr-2'>Moda</p>
                        <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                            <span className='relative text-gray-100'>MASCULINA</span>
                        </p>
                    </blockquote>

                    <div className='grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 italic lg:grid-cols-4 my-6 mx-4 sm:mx-0'>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-2'>
                                Camisa Básica Masculina Manga Camisa Básica Masculina Manga Camisa
                                Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerMasculino}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Camisa Básica Masculina Manga
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 25,30</p>
                        </div>
                    </div>
                    <h4 className='tracking-wider p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                        VER TUDO
                    </h4>
                </section>

                {/* CARD PRODUTOS ACESSORIOS */}

                <section>
                    <blockquote className='flex text-lg sm:text-2xl mt-14 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                        <p className='mr-2'>Outros</p>
                        <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                            <span className='relative text-gray-100'>PRODUTOS</span>
                        </p>
                    </blockquote>

                    <div className='grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 italic lg:grid-cols-4 my-6 mx-4 sm:mx-0'>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-2'>
                                Perfume Natura Meu Primeiro Humor Perfume Natura Meu Primeiro Humor
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerPerfume}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                    </div>
                    <h4 className='tracking-wider p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                        VER TUDO
                    </h4>
                </section>

                {/* CARD PRODUTOS Tupperware */}

                <section>
                    <blockquote className='flex text-lg sm:text-2xl mt-14 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                        <p className='mr-2'>Temos</p>
                        <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                            <span className='relative text-gray-100'>Tupperware</span>
                        </p>
                    </blockquote>

                    <div className='grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 italic lg:grid-cols-4 my-6 mx-4 sm:mx-0'>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-2'>
                                Perfume Natura Meu Primeiro Humor Perfume Natura Meu Primeiro Humor
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div className='mb-6'>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                        <div>
                            <Image
                                className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                                src={BannerTupperware}
                                width={480}
                                height={600}
                                objectFit='cover'
                                alt='Banner03'
                            />
                            <h4 className='text-gray-500 text-sm mt-4'>
                                Perfume Natura Meu Primeiro Humor
                            </h4>
                            <p className='text-gray-800 font-bold'>R$ 112,80</p>
                        </div>
                    </div>
                    <h4 className='tracking-wider p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                        VER TUDO
                    </h4>
                </section>

                {/* CARD PRODUTOS DESTAQUE */}
                <section>
                    <div className='sm:flex gap-6 justify-center my-4'>
                        <div className='relative'>
                            <div className='flex justify-center items-center '>
                                <div className='absolute text-center z-50 bg-white px-4 sm:px-6 tracking-wider py-2 sm:py-3  font-semibold rounded '>
                                    <h4 className='uppercase text-gray-500 text-[10px] sm:text-[12px]'>
                                        Chegou novidade
                                    </h4>
                                    <p className='uppercase text-xs sm:text-base'>
                                        Vestido-Short com detalhes
                                    </p>
                                </div>
                                <Image
                                    src={BannerFeminino}
                                    width={800}
                                    height={400}
                                    objectFit='cover'
                                    alt='Banner01'
                                />
                            </div>
                        </div>
                        <div className='relative'>
                            <div className=' flex justify-center items-center '>
                                <div className='absolute  text-center z-50 bg-white px-4 sm:px-6 tracking-wider py-2 sm:py-3  font-semibold rounded '>
                                    <h4 className='uppercase text-gray-500 text-[10px] sm:text-[12px]'>
                                        Promoção
                                    </h4>
                                    <p className='uppercase text-xs sm:text-base'>
                                        por apenas <span className='text-red-500'>R$ 20,00</span>
                                    </p>
                                </div>
                                <Image
                                    src={BannerMasculino}
                                    width={800}
                                    height={400}
                                    objectFit='cover'
                                    alt='Banner01'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CARD DEPOIMENTOS */}
                <section>
                    <div className='px-5 py-10 text-gray-600 body-font'>
                        <blockquote className='flex justify-center text-lg py-10 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                            <p className='mr-2'>Depoimentos dos</p>
                            <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                                <span className='relative text-gray-100'>CLIENTES</span>
                            </p>
                        </blockquote>
                        <Slider {...settings2}>
                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className='text-gray-500'>Senior Product Designer</p>
                            </div>

                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className='text-gray-500'>Senior Product Designer</p>
                            </div>

                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className='text-gray-500'>Senior Product Designer</p>
                            </div>

                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className='text-gray-500'>Senior Product Designer</p>
                            </div>

                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    ALPER KAMU
                                </h2>
                                <p className='text-gray-500'>UI Develeoper</p>
                            </div>

                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    HENRY LETHAM
                                </h2>
                                <p className='text-gray-500'>CTO</p>
                            </div>
                            <div className='h-full text-center px-0 sm:px-4'>
                                <Image
                                    width={80}
                                    height={80}
                                    alt='testimonial'
                                    className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                                    src={BannerFeminino}
                                />
                                <p className='leading-relaxed text-sm'>
                                    Edison bulb retro cloud bread echo park, helvetica stumptown
                                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                                    adaptogen squid fanny pack vaporware.
                                </p>
                                <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                                    HENRY LETHAM
                                </h2>
                                <p className='text-gray-500'>CTO</p>
                            </div>
                        </Slider>
                    </div>
                </section>
            </Header>
        </>
    );
};

export default Home;
