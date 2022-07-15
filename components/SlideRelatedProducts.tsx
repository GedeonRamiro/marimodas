import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import formatReal from '../utils/formatCurrent';

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
    products: Product[];
    routerProduct: string;
};

const SlideRelatedProducts = ({ products, routerProduct }: Props) => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,

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

    const scrollToProduct = () => {
        document.querySelector('.drawer-content')?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Slider {...settings}>
                {products &&
                    products.map((product) => (
                        <Link href={`/${routerProduct}/${product.slug}`} key={product.id}>
                            <div className='p-2' onClick={scrollToProduct}>
                                <Image
                                    className='duration-300 transform hover:scale-110  hover:opacity-70 cursor-pointer'
                                    src={product.image[0].image1.url}
                                    width={480}
                                    height={600}
                                    objectFit='cover'
                                    alt={product.name}
                                />
                                <h4 className='text-gray-500 text-sm mt-2'>{product.name}</h4>
                                <p className='text-gray-800 font-bold'>
                                    {formatReal(product.price)}
                                </p>
                            </div>
                        </Link>
                    ))}
            </Slider>
        </>
    );
};

export default SlideRelatedProducts;
