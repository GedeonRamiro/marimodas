import type { GetStaticProps, NextPage } from 'next';
import * as prismic from '@prismicio/client';
import { client } from '../utils/prismic-configuration';
import Header from '../components/Header';
import BannerFeminino from '../public/images/banner-feminino.jpg';
import BannerMasculino from '../public/images/banner-masculino.jpg';
import BannerAcessorios from '../public/images/banner-acessorios.jpg';
import { GiHanger } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Image from 'next/image';
import Slider from 'react-slick';
import SlideBannerMain from '../components/SlideBannerMain';
import TestimonialClient from '../components/TestimonialClient';
import Blockquote from '../components/Blockquote';
import Link from 'next/link';
import { ProductsMapper } from '../utils/mappers';
import formatCurrent from '../utils/formatCurrent';

interface BannerEmphasis {
    id: string;
    title: string;
    image: string;
    link: string;
}

interface bannerNews extends BannerEmphasis {
    description: string;
}

interface bannerPromotion extends BannerEmphasis {
    price: number;
}

interface Products {
    id: string;
    slug: string;
    image: [{ image1: { url: string } }];
    name: string;
    description: string;
    price: number;
}

interface ProductsSize extends Products {
    sizeP: boolean;
    sizeM: boolean;
    sizeG: boolean;
}

interface ProductsSizeSingle extends Products {
    available: boolean;
}

type SlideBanner = {
    id: string;
    title: string;
    description: string;
    url: string;
};

type TestimonialClient = {
    id: string;
    name: string;
    testimonial: string;
    image: string;
    date: string;
};

type Props = {
    slideBanner: SlideBanner[];
    testimonialClient: TestimonialClient[];
    bannerNews: bannerNews;
    bannerPromotion: bannerPromotion;
    feminine: ProductsSize[];
    masculine: ProductsSize[];
    tupperware: ProductsSizeSingle[];
    others: ProductsSizeSingle[];
};

const Home: NextPage<Props> = ({
    slideBanner,
    testimonialClient,
    bannerPromotion,
    bannerNews,
    feminine,
    masculine,
    tupperware,
    others,
}) => {
    const settingsProduct = {
        infinite: true,
        speed: 1000,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        cssEase: 'linear',
    };

    return (
        <>
            <Header>
                {/*  SLIDEMAIN */}
                <section>
                    <div className='flex gap-4 sm:my-10'>
                        <div className='text-center w-full lg:w-1/2'>
                            <SlideBannerMain slide={slideBanner} />
                        </div>
                        <div className='lg:flex lg:flex-col hidden gap-4 lg:w-1/2'>
                            <div className='flex gap-4'>
                                <Link href='/feminino'>
                                    <div className='relative flex  justify-center items-center cursor-pointer'>
                                        <p className='bg-white px-6 tracking-wider py-3 text-sm font-semibold rounded absolute z-50'>
                                            FEMININO
                                        </p>
                                        <Image
                                            src={BannerFeminino}
                                            width={400}
                                            height={250}
                                            objectFit='cover'
                                            alt='BannerFeminino'
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                    </div>
                                </Link>
                                <Link href='/masculino'>
                                    <div className='relative flex  justify-center items-center cursor-pointer'>
                                        <p className='bg-white px-6 tracking-wider py-3 text-sm font-semibold rounded absolute z-50'>
                                            MASCULINO
                                        </p>
                                        <Image
                                            src={BannerMasculino}
                                            width={400}
                                            height={250}
                                            objectFit='cover'
                                            alt='BannerMasculino'
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                    </div>
                                </Link>
                            </div>
                            <Link href='/outrosprodutos'>
                                <div className='relative flex  justify-center items-center cursor-pointer'>
                                    <p className='bg-white px-6 tracking-wider py-3 text-sm font-semibold rounded absolute z-50'>
                                        OUTROS PRODUTOS
                                    </p>
                                    <Image
                                        src={BannerAcessorios}
                                        width={800}
                                        height={250}
                                        objectFit='cover'
                                        alt='BannerAcessorios'
                                        placeholder='blur'
                                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

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
                    <Blockquote text={'Moda'} textAction={'FEMININA'} />

                    {/* CARD PRODUTOS FEMININOS com slide */}

                    <Slider {...settingsProduct} className='sm:hidden'>
                        {feminine &&
                            feminine.map((productFeminine) => (
                                <Link
                                    href={`/feminino/${productFeminine.slug}`}
                                    key={productFeminine.id}
                                >
                                    <div className='p-2'>
                                        <Image
                                            className='duration-300 transform hover:scale-110 hover:opacity-70 cursor-pointer'
                                            src={productFeminine.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productFeminine.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productFeminine.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productFeminine.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </Slider>

                    {/* CARD PRODUTOS FEMININOS sem slide */}
                    <div className='hidden sm:grid gap-4 sm:gap-6 grid-cols-3 md:grid-cols-4 italic lg:grid-cols-5 my-6 mx-4 sm:mx-0'>
                        {feminine &&
                            feminine.map((productFeminine) => (
                                <Link
                                    href={`/feminino/${productFeminine.slug}`}
                                    key={productFeminine.id}
                                >
                                    <div className='mb-6'>
                                        <Image
                                            className='duration-300 transform hover:scale-110  hover:opacity-70 cursor-pointer'
                                            src={productFeminine.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productFeminine.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productFeminine.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productFeminine.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    <Link href='/feminino'>
                        <h4 className='cursor-pointer tracking-wider mt-10 sm:mt-0 p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                            VER TUDO
                        </h4>
                    </Link>
                </section>

                {/* CARD PRODUTOS MASCULINOS */}
                <section>
                    <Blockquote text={'Moda'} textAction={'MASCULINA'} />

                    <Slider {...settingsProduct} className='sm:hidden'>
                        {masculine &&
                            masculine.map((productMasculine) => (
                                <Link
                                    href={`/masculino/${productMasculine.slug}`}
                                    key={productMasculine.id}
                                >
                                    <div className='p-2' key={productMasculine.id}>
                                        <Image
                                            className='duration-300 transform hover:scale-110 hover:opacity-70 cursor-pointer'
                                            src={productMasculine.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productMasculine.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productMasculine.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productMasculine.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </Slider>

                    <div className='hidden sm:grid gap-4 sm:gap-6 grid-cols-3 md:grid-cols-4 italic lg:grid-cols-5 my-6 mx-4 sm:mx-0'>
                        {masculine &&
                            masculine.map((productMasculine) => (
                                <Link
                                    href={`/masculino/${productMasculine.slug}`}
                                    key={productMasculine.id}
                                >
                                    <div className='mb-6' key={productMasculine.id}>
                                        <Image
                                            className='duration-300 transform hover:scale-110  hover:opacity-70 cursor-pointer'
                                            src={productMasculine.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productMasculine.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productMasculine.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productMasculine.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    <Link href='/masculino'>
                        <h4 className='cursor-pointer tracking-wider mt-10 sm:mt-0 p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                            VER TUDO
                        </h4>
                    </Link>
                </section>

                {/* CARD PRODUTOS ACESSORIOS */}
                <section>
                    <Blockquote text={'Outros'} textAction={'Produtos'} />

                    <Slider {...settingsProduct} className='sm:hidden'>
                        {others &&
                            others.map((productOthers) => (
                                <Link
                                    href={`/outrosprodutos/${productOthers.slug}`}
                                    key={productOthers.id}
                                >
                                    <div className='p-2'>
                                        <Image
                                            className='duration-300 transform hover:scale-110 hover:opacity-70 cursor-pointer'
                                            src={productOthers.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productOthers.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productOthers.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productOthers.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </Slider>

                    <div className='hidden sm:grid gap-4 sm:gap-6 grid-cols-3 md:grid-cols-4 italic lg:grid-cols-5 my-6 mx-4 sm:mx-0'>
                        {others &&
                            others.map((productOthers) => (
                                <Link
                                    href={`/outrosprodutos/${productOthers.slug}`}
                                    key={productOthers.id}
                                >
                                    <div className='mb-6'>
                                        <Image
                                            className='duration-300 transform hover:scale-110  hover:opacity-70 cursor-pointer'
                                            src={productOthers.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productOthers.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productOthers.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productOthers.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    <Link href='/outrosprodutos'>
                        <h4 className='cursor-pointer tracking-wider mt-10 sm:mt-0 p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                            VER TUDO
                        </h4>
                    </Link>
                </section>

                {/* CARD PRODUTOS Tupperware */}
                <section>
                    <Blockquote text={'Temos'} textAction={'Tupperware'} />

                    <Slider {...settingsProduct} className='sm:hidden'>
                        {tupperware &&
                            tupperware.map((productTupperware) => (
                                <Link
                                    href={`/tupperware/${productTupperware.slug}`}
                                    key={productTupperware.id}
                                >
                                    <div className='p-2'>
                                        <Image
                                            className='duration-300 transform hover:scale-110 hover:opacity-70 cursor-pointer'
                                            src={productTupperware.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productTupperware.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productTupperware.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productTupperware.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </Slider>

                    <div className='hidden sm:grid gap-4 sm:gap-6 grid-cols-3 md:grid-cols-4 italic lg:grid-cols-5 my-6 mx-4 sm:mx-0'>
                        {tupperware &&
                            tupperware.map((productTupperware) => (
                                <Link
                                    href={`/tupperware/${productTupperware.slug}`}
                                    key={productTupperware.id}
                                >
                                    <div className='mb-6'>
                                        <Image
                                            className='duration-300 transform hover:scale-110  hover:opacity-70 cursor-pointer'
                                            src={productTupperware.image[0].image1.url}
                                            width={480}
                                            height={600}
                                            objectFit='cover'
                                            alt={productTupperware.name}
                                            placeholder='blur'
                                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                        />
                                        <h4 className='text-gray-500 text-sm mt-2'>
                                            {productTupperware.name}
                                        </h4>
                                        <p className='text-gray-800 font-bold'>
                                            {formatCurrent(productTupperware.price)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>

                    <Link href='/feminino'>
                        <h4 className='cursor-pointer tracking-wider mt-10 sm:mt-0 p-2 sm:p-4 text-xs sm:text-sm text-center text-gray-500 font-semibold mb-4 sm:mx-0 mx-4 box-decoration-slice bg-gradient-to-r from-gray-100 to-gray-50 px-4'>
                            VER TUDO
                        </h4>
                    </Link>
                </section>

                {/* CARD PRODUTOS DESTAQUE */}
                <section>
                    <div className='sm:flex gap-6 justify-center my-10 sm:my-20'>
                        <Link href={bannerNews.link}>
                            <div className='relative cursor-pointer'>
                                <div className='flex justify-center items-center '>
                                    <div className='absolute text-center z-50 bg-white px-4 sm:px-6 tracking-wider py-2 sm:py-3  font-semibold rounded '>
                                        <h4 className='uppercase text-gray-500 text-xs sm:text-[12px]'>
                                            {bannerNews.title}
                                        </h4>
                                        <p className='uppercase text-sm sm:text-base'>
                                            {bannerNews.description}
                                        </p>
                                    </div>
                                    <Image
                                        src={bannerNews.image}
                                        width={800}
                                        height={400}
                                        objectFit='cover'
                                        alt={bannerNews.title}
                                        placeholder='blur'
                                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link href={bannerPromotion.link}>
                            <div className='relative cursor-pointer mt-1 sm:mt-0'>
                                <div className=' flex justify-center items-center '>
                                    <div className='absolute  text-center z-50 bg-white px-4 sm:px-6 tracking-wider py-2 sm:py-3  font-semibold rounded '>
                                        <h4 className='uppercase text-gray-500 text-[10px] sm:text-[12px]'>
                                            {bannerPromotion.title}
                                        </h4>
                                        <p className='uppercase text-sm sm:text-base'>
                                            por apenas{' '}
                                            <span className='text-red-500'>
                                                R$ {bannerPromotion.price}
                                            </span>
                                        </p>
                                    </div>
                                    <Image
                                        src={bannerPromotion.image}
                                        width={800}
                                        height={400}
                                        objectFit='cover'
                                        alt={bannerPromotion.title}
                                        placeholder='blur'
                                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8tZmjHgAGWgIm6BA6ZAAAAABJRU5ErkJggg=='
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* CARD DEPOIMENTOS */}
                <section>
                    <div className='px-5 text-gray-600 body-font mb-20'>
                        <div className='flex justify-center mb-4'>
                            <Blockquote text={'Depoimentos dos'} textAction={'Clientes'} />
                        </div>
                        <TestimonialClient testimonials={testimonialClient} />
                    </div>
                </section>
            </Header>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const resultSlideBanner = await client.query(
        prismic.Predicates.at('document.type', 'slidebanner')
    );

    const slideBanner = resultSlideBanner.results.map((data) => ({
        id: data.id,
        title: data.data.title,
        description: data.data.description,
        url: data.data.image.url,
    }));

    const resultTestimonials = await client.query(
        prismic.Predicates.at('document.type', 'depoimentoclientes')
    );

    const testimonialClient = resultTestimonials.results.map((data) => ({
        id: data.id,
        name: data.data.name,
        testimonial: data.data.testimonial,
        image: data.data.avatar.url,
        date: new Date(data.first_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }),
    }));

    const resultBannerNews = await client.query(
        prismic.Predicates.at('document.type', 'bannernovidade')
    );

    const bannerNews = resultBannerNews.results.reduce(
        (acumulador, data) => ({
            ...acumulador,
            id: data.id,
            title: data.data.title,
            description: data.data.description,
            image: data.data.image.url,
            link: data.data.link.url,
        }),
        {}
    );

    const resultBannerPromotion = await client.query(
        prismic.Predicates.at('document.type', 'bannerpromocao')
    );

    const bannerPromotion = resultBannerPromotion.results.reduce(
        (acumulador, data) => ({
            ...acumulador,
            id: data.id,
            title: data.data.title,
            price: data.data.price,
            image: data.data.image.url,
            link: data.data.link.url,
        }),
        {}
    );

    const resultFeminine = await client.query(prismic.Predicates.at('document.type', 'feminino'), {
        orderings: ['document.last_publication_date desc'],
        pageSize: 10,
    });

    const feminine = ProductsMapper(resultFeminine);

    const resultMasculine = await client.query(
        prismic.Predicates.at('document.type', 'masculino'),
        {
            orderings: ['document.last_publication_date desc'],
            pageSize: 10,
        }
    );

    const masculine = ProductsMapper(resultMasculine);

    const resultTupperware = await client.query(
        prismic.Predicates.at('document.type', 'tupperware'),
        {
            orderings: ['document.last_publication_date desc'],
            pageSize: 10,
        }
    );

    const tupperware = ProductsMapper(resultTupperware);

    const resultOthers = await client.query(prismic.Predicates.at('document.type', 'others'), {
        orderings: ['document.last_publication_date desc'],
        pageSize: 10,
    });

    const others = ProductsMapper(resultOthers);

    return {
        props: {
            slideBanner,
            testimonialClient,
            bannerPromotion,
            bannerNews,
            feminine,
            masculine,
            resultFeminine,
            tupperware,
            others,
        },
        revalidate: 60 * 30, // A cada 30 min
    };
};
