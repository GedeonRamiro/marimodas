import Image from 'next/image';
import Header from '../components/Header';
import BannerFeminino from '../../public/images/banner-feminino.jpg';
import { GiHanger } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Slider from 'react-slick';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import * as prismic from '@prismicio/client';
import { client } from '../../utils/prismic-configuration';
import { ProductsMapper } from '../../utils/mappers';

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

type Props = {
    product: ProductsSize[];
};

const Feminino = (responsePost: any, product: Props) => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,

        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    console.log(responsePost);
    //console.log(product);

    return (
        <Header>
            <div className='bg-gray-50 p-2 sm:p-4 font-semibold text-lg sm:text-xl lg:text-2xl italic text-center mt-5 mb-2 text-gray-700'>
                Roupa Amarela
            </div>
            <div className='mx-4 sm:hidden text-xs breadcrumbs'>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/feminino'>Feminino</Link>
                    </li>
                    <li>Roupa Amarela</li>
                </ul>
            </div>

            <div className='sm:flex justify-center mx-4 sm:mx-0 '>
                <div className='max-w-md'>
                    <Image
                        src={BannerFeminino}
                        width={480}
                        height={600}
                        objectFit='cover'
                        alt='Banner03'
                    />

                    <div className='grid grid-cols-6 gap-2'>
                        <div className='border-2 border-yellow-400 flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-100 hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>

                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <Image
                                className='duration-300 transform opacity-50  hover:opacity-100 cursor-pointer'
                                src={BannerFeminino}
                                width={70}
                                height={80}
                                objectFit='cover'
                                alt='Banner03'
                            />
                        </div>
                    </div>
                </div>

                <div className='divide-y max-w-md sm:ml-6 mt-6 sm:mt-0'>
                    <div className='hidden sm:flex sm:text-sm breadcrumbs mb-4'>
                        <ul>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/feminino'>Feminino</Link>
                            </li>
                            <li>Roupa Amarela</li>
                        </ul>
                    </div>
                    <div className='my-4'>
                        <h4 className='font-semibold text-xl sm:text-2xl pt-4'>R$ 34,50</h4>
                        <p className='text-xs sm:text-[13px] lg:text-sm'>
                            Compre Macacao Curto Amarelo parcelado sem juros! Saiba mais sobre
                            nossas incríveis ofertas e promoções em milhões de produtos.
                        </p>
                    </div>
                    <div className='my-4'>
                        <h2 className='my-2 pt-2 font-semibold'>Tamanhos</h2>
                        <div className='flex'>
                            <button className='p-2 ring-yellow-400 ring-offset-2 ring-2 mr-2 bg-yellow-300 font-semibold h-8 w-8 sm:w-9 sm:h-9 flex justify-center rounded items-center'>
                                P
                            </button>
                            <button
                                disabled
                                className='p-2 cursor-not-allowed mr-2 line-through bg-gray-100 text-red-300 h-8 w-8 sm:w-9 sm:h-9 flex justify-center rounded items-center'
                            >
                                <p>M</p>
                            </button>
                            <button className='p-2 mr-2  bg-gray-100  h-8 w-8 sm:w-9 sm:h-9 flex justify-center rounded items-center'>
                                G
                            </button>
                        </div>
                        <button className='mt-4 mb-2 text-sm px-6 py-2 font-light bg-black text-white'>
                            Fazer pedido
                        </button>
                    </div>
                    <div className='my-4'>
                        <div className='lg:flex justify-between text-gray-500 my-4'>
                            <div className='flex items-center mb-4'>
                                <GiHanger size={35} />
                                <div className='text-xs ml-2'>
                                    <h4 className=''>Compre agora</h4>
                                </div>
                            </div>
                            <div className='flex items-center mb-4'>
                                <FaMoneyCheck size={31} />
                                <div className='text-xs ml-2'>
                                    <h4 className=''>Dinheiro, pix ou cartão de crédito</h4>
                                </div>
                            </div>
                            <div className='flex items-center mb-4'>
                                <AiOutlineFieldTime size={32} />
                                <div className='text-xs ml-2'>
                                    <h4 className=''>Suporte 24/7</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='divide-y my-10 sm:my-20'>
                <div>{''}</div>
                <div>{''}</div>
            </div>

            <div className='mb-10 sm:mb-20'>
                <blockquote className='flex text-lg sm:text-2xl mt-14 mb-4 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                    <p className='mr-2'>Produtos</p>
                    <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                        <span className='relative text-gray-100'>RELACIONADOS</span>
                    </p>
                </blockquote>
                <Slider {...settings}>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='p-2'>
                        <Image
                            src={BannerFeminino}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                </Slider>
            </div>
        </Header>
    );
};

export default Feminino;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug }: any = params;

    try {
        const responsePost = await client.getByUID('feminino', String(slug), {});

        //const product = ProductsMapper(responsePost);
        //const product = ProductsMapper(responsePost);

        return {
            props: {
                // product,
                responsePost,
            },
        };
    } catch (error) {
        if (error) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/',
                },
            };
        }
    }

    return {
        props: {},
    };
};
