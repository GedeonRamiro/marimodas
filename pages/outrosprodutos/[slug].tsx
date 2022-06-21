import Image from 'next/image';
import Header from '../../components/Header';
import BannerFeminino from '../../public/images/banner-feminino.jpg';
import Slider from 'react-slick';
import { GetServerSideProps } from 'next';
import { client } from '../../utils/prismic-configuration';
import BuyProduct from '../../components/BuyProduct';

type Product = {
    id: string;
    slug: string;
    image: [{ image1: { url: string } }];
    name: string;
    description: string;
    price: number;
    pieceSize: [{ size: string; active: boolean }];
    routeCategory: string;
};

type Props = {
    product: Product;
};

const OtherProducts = ({ product }: Props) => {
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

    return (
        <Header>
            <BuyProduct product={product} />

            <div className='divide-y mt-4 mb-10 sm:my-20'>
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

export default OtherProducts;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug }: any = params;

    try {
        const resultProduct = await client.getByUID('others', String(slug), {});

        const product = {
            id: resultProduct.id,
            image: resultProduct.data.image,
            name: resultProduct.data.name,
            description: resultProduct.data.description,
            price: resultProduct.data.price,
            pieceSize: [{ size: 'single', active: resultProduct.data['available'] }],
            routeCategory: 'outrosprodutos',
        };

        return {
            props: {
                product,
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
