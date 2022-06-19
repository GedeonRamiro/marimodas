import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaMoneyCheck } from 'react-icons/fa';
import { GiHanger } from 'react-icons/gi';
import formatCurrent from '../utils/formatCurrent';

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

const BuyProduct = ({ product }: Props) => {
    const [productPhoto, setProductPhoto] = useState(0);
    const [sizeProduct, setSizeProduct] = useState('');

    const productPhotoActive = (photoActive: number) => {
        setProductPhoto(photoActive);
    };

    const buttonActive = (size: string) => {
        setSizeProduct(size);
    };

    const productUnavailable = product?.pieceSize.every((size) => size.active === false);

    return (
        <>
            <h1 className='bg-gray-50 p-2 sm:p-4 font-semibold text-lg sm:text-xl lg:text-2xl italic text-center mt-5 mb-2 text-gray-700'>
                {product.name}
            </h1>
            <div className='mx-4 sm:hidden text-xs breadcrumbs'>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='capitalize'>
                        <Link href={`/${product.routeCategory}`}>{product.routeCategory}</Link>
                    </li>
                    <li>{product.name}</li>
                </ul>
            </div>

            <div className='sm:flex justify-center mx-4 sm:mx-0 '>
                <div className='max-w-md'>
                    <Image
                        src={product.image[productPhoto].image1.url}
                        width={480}
                        height={600}
                        objectFit='cover'
                        alt={product.name}
                    />

                    <div className='grid grid-cols-6 gap-2'>
                        {product.image.map((image, index) => (
                            <div
                                onMouseEnter={() => productPhotoActive(index)}
                                key={index}
                                className={`${
                                    productPhoto === index
                                        ? 'border-2 border-yellow-400 flex justify-center'
                                        : 'opacity-50 flex justify-center border-2 border-transparent'
                                } `}
                            >
                                <Image
                                    className='duration-300 transform opacity-100 hover:opacity-100 cursor-pointer'
                                    src={image.image1.url}
                                    width={70}
                                    height={80}
                                    objectFit='cover'
                                    alt={product.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='divide-y max-w-md sm:ml-6 mt-6 sm:mt-0'>
                    <div className='hidden sm:flex sm:text-sm breadcrumbs mb-4'>
                        <ul>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='capitalize'>
                                <Link href={`/${product.routeCategory}`}>
                                    {product.routeCategory}
                                </Link>
                            </li>
                            <li>{product.name}</li>
                        </ul>
                    </div>
                    <div className='my-4'>
                        <h4 className='font-semibold text-2xl sm:text-2xl pt-4'>
                            {formatCurrent(product.price)}
                        </h4>
                        <p className='text-xs sm:text-[13px] lg:text-sm'>{product.description}</p>
                    </div>

                    <div className='my-4'>
                        {productUnavailable ? (
                            <p className='mt-4 text-sm text-red-600'>Produto indisponível</p>
                        ) : (
                            product.pieceSize && (
                                <>
                                    <h2 className='my-2 pt-2 font-semibold'>Tamanhos</h2>
                                    <div className='flex'>
                                        {product.pieceSize.map((size, index) =>
                                            size.active === true ? (
                                                <button
                                                    onClick={() => buttonActive(size.size)}
                                                    key={index}
                                                    className={`${
                                                        sizeProduct === size.size
                                                            ? 'ring-yellow-400 ring-offset-2 ring-2 bg-yellow-300 font-semibold mr-2 h-8 w-8 sm:w-9 sm:h-9 flex justify-center rounded items-center'
                                                            : 'bg-gray-100 mr-2 h-8 w-8 sm:w-9 sm:h-9 flex justify-center rounded items-center'
                                                    }  `}
                                                >
                                                    {size.size}
                                                </button>
                                            ) : (
                                                <button
                                                    key={index}
                                                    disabled
                                                    className='p-2 cursor-not-allowed mr-2 line-through bg-gray-100 text-red-300 h-8 w-8 sm:w-9 sm:h-9 flex justify-center rounded items-center'
                                                >
                                                    {size.size}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </>
                            )
                        )}

                        <button className='mt-4 mb-2 text-sm px-6 py-2 font-light bg-black text-white'>
                            {productUnavailable ? 'Avise-me quando chegar' : 'Fazer pedido'}
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
        </>
    );
};

export default BuyProduct;
