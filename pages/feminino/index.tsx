import Image from 'next/image';
import Header from '../../components/Header';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { client } from '../../utils/prismic-configuration';
import * as prismic from '@prismicio/client';
import { useEffect, useState } from 'react';
import formatCurrent from '../../utils/formatCurrent';
import { BiLastPage, BiFirstPage } from 'react-icons/bi';
import Link from 'next/link';

type Products = {
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
    products: Products[];
    page: number;
    totalPage: number;
};

const Feminine = ({ products: getProducts, page, totalPage }: Props) => {
    const [products, setProducts] = useState(getProducts || []);
    const [valueOrder, setValueOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(Number(page));

    const productsOrderAction = (order: string) => {
        setValueOrder(order);

        const newsProducts = [...products];

        if (order === 'newsProducts') {
            setProducts(getProducts);
        }

        if (order === 'alphabeticalOrder') {
            const result = newsProducts.sort((x, y) => {
                let a = x.name.toLocaleLowerCase(),
                    b = y.name.toLocaleLowerCase();

                return a == b ? 0 : a > b ? 1 : -1;
            });

            setProducts(result);
        }

        if (order === 'smallerPrice') {
            console.log('Menor preco');
            const result = newsProducts.sort((x, y) => {
                return x.price - y.price;
            });

            setProducts(result);
        }

        if (order === 'largerPrice') {
            console.log('Maior preco');

            const result = newsProducts.sort((x, y) => {
                return y.price - x.price;
            });

            setProducts(result);
        }
    };

    const reqProducts = async (pageNumber: number) => {
        const resultFeminine = await client.query(
            prismic.Predicates.at('document.type', 'feminino'),
            {
                orderings: ['document.last_publication_date desc'],
                pageSize: 4,
                page: pageNumber,
            }
        );

        return resultFeminine;
    };

    const navigatePage = async (pageNumber: number) => {
        const response = await reqProducts(pageNumber);

        if (response.results.length === 0) return;

        const products = response.results.map((product) => ({
            id: product.id,
            image: product.data.image,
            name: product.data.name,
            description: product.data.description,
            price: product.data.price,
        }));

        setCurrentPage(pageNumber);
        setProducts(products as Products[]);
    };

    useEffect(() => {}, [valueOrder]);

    return (
        <>
            <Head>
                <title>Feminino - Marimodas</title>
            </Head>
            <Header>
                <blockquote className='flex justify-center text-lg sm:text-2xl my-10 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                    <p className='mr-2'>Moda</p>
                    <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                        <span className='relative text-gray-100'>FEMININA</span>
                    </p>
                </blockquote>

                <div className='flex justify-end items-center mx-4 sm:mx-0'>
                    <select
                        defaultValue=''
                        onChange={(event) => productsOrderAction(event.target.value)}
                        className='select select-sm  select-bordered  w-full max-w-[140px]'
                    >
                        <option value='' disabled>
                            Ordenar por
                        </option>
                        <option value='newsProducts'>Mais Novos</option>
                        <option value='alphabeticalOrder'>Nome A-Z</option>
                        <option value='smallerPrice'>Menor Preço</option>
                        <option value='largerPrice'>Maior Preço</option>
                    </select>
                </div>

                <div className='grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 italic lg:grid-cols-5 my-6 mx-4 sm:mx-0'>
                    {products.map((product) => (
                        <Link href={`/feminino/${product.slug}`} key={product.id}>
                            <div className='mb-6' key={product.id}>
                                <Image
                                    className='duration-300 transform hover:scale-110 hover:opacity-70 cursor-pointer'
                                    src={product.image[0].image1.url}
                                    width={480}
                                    height={600}
                                    objectFit='cover'
                                    alt={product.name}
                                />
                                <h4 className='text-gray-500 text-sm mt-2'>{product.name}</h4>
                                <p className='text-gray-800 font-bold'>
                                    {formatCurrent(product.price)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='flex justify-center my-20'>
                    <div className='flex justify-between sm:mx-0 mx-6 mb-10'>
                        <div className='container flex justify-center mx-auto'>
                            <ul className='flex'>
                                <li>
                                    <button
                                        onClick={() => navigatePage(1)}
                                        className={`${
                                            currentPage === 1
                                                ? 'hidden'
                                                : 'font-semibold text-xs sm:text-base h-7 px-3 sm:h-8 sm:px-4 text-gray-600 bg-white hover:bg-gray-100'
                                        }`}
                                    >
                                        <BiFirstPage size={20} />
                                    </button>
                                </li>
                                {[...new Array(totalPage)].map((value, index) => (
                                    <li key={index}>
                                        <button
                                            disabled={currentPage === index + 1 ? true : false}
                                            onClick={() => navigatePage(index + 1)}
                                            className={` ${
                                                currentPage === index + 1
                                                    ? ' text-gray-600 bg-yellow-500 shadow-lg cursor-not-allowed'
                                                    : 'text-gray-600 bg-white hover:bg-gray-100'
                                            } font-semibold text-xs sm:text-base h-7 px-3 sm:h-8 sm:px-4 `}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={() => navigatePage(totalPage)}
                                        className={`${
                                            currentPage === totalPage
                                                ? 'hidden'
                                                : 'font-semibold text-xs sm:text-base h-7 px-3 sm:h-8 sm:px-4 text-gray-600 bg-white hover:bg-gray-100'
                                        }`}
                                    >
                                        <BiLastPage size={20} />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Feminine;

export const getServerSideProps: GetServerSideProps = async () => {
    const resultFeminine = await client.query(prismic.Predicates.at('document.type', 'feminino'), {
        orderings: ['document.last_publication_date desc'],
        pageSize: 4,
        page: 1,
    });

    const products = resultFeminine.results.map((product) => ({
        id: product.id,
        slug: product.uid,
        image: product.data.image,
        name: product.data.name,
        description: product.data.description,
        price: product.data.price,
    }));

    return {
        props: {
            products,
            page: resultFeminine.page,
            totalPage: resultFeminine.total_pages,
        },
    };
};
