import Image from 'next/image';
import Header from '../../components/Header';
import { client } from '../../utils/prismic-configuration';
import * as prismic from '@prismicio/client';
import formatCurrent from '../../utils/formatCurrent';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { orderProducts } from '../../utils/orderProducts';
import { ProductsMapper } from '../../utils/mappers';
import Link from 'next/link';
import Pagination from '../../components/Pagination';
import { GetServerSideProps } from 'next';

type Products = {
    id: string;
    slug: string;
    image: [{ image1: { url: string } }];
    name: string;
    description: string;
    price: number;
    pieceSize: [{ size: string; active: boolean }];
    routeCategory: string;
    date: string;
};

type Props = {
    products: Products[];
    page: number;
    totalPage: number;
};

const Masculine = ({ products: getProducts, page, totalPage }: Props) => {
    const [products, setProducts] = useState(getProducts || []);
    const [valueOrder, setValueOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(Number(page));

    const productsOrderAction = (order: string) => {
        setValueOrder(order);

        const resultOrderProducts = orderProducts(order, products) as Products[];

        setProducts(resultOrderProducts);
    };

    const reqProducts = async (pageNumber: number) => {
        const resultFeminine = await client.query(
            prismic.Predicates.at('document.type', 'masculino'),
            {
                orderings: ['document.last_publication_date desc'],
                pageSize: 1,
                page: pageNumber,
            }
        );

        return resultFeminine;
    };

    const navigatePage = async (pageNumber: number) => {
        document.querySelector('.drawer-content')?.scrollTo({ top: 0, behavior: 'smooth' });
        const response = await reqProducts(pageNumber);

        if (response.results.length === 0) return;

        const products = ProductsMapper(response);

        setCurrentPage(pageNumber);
        setProducts(products as Products[]);
    };

    useEffect(() => {}, [valueOrder]);

    return (
        <>
            <Head>
                <title>Masculino - Marimodas</title>
            </Head>
            <Header>
                <blockquote className='flex justify-center text-lg sm:text-2xl my-10 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                    <p className='mr-2'>Moda</p>
                    <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                        <span className='relative text-gray-100'>Masculina</span>
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
                        <Link href={`/masculino/${product.slug}`} key={product.id}>
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

                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    navigatePage={navigatePage}
                />
            </Header>
        </>
    );
};

export default Masculine;

export const getServerSideProps: GetServerSideProps = async () => {
    const resultMasculine = await client.query(
        prismic.Predicates.at('document.type', 'masculino'),
        {
            orderings: ['document.last_publication_date desc'],
            pageSize: 1,
            page: 1,
        }
    );

    const products = ProductsMapper(resultMasculine);

    return {
        props: {
            products,
            page: resultMasculine.page,
            totalPage: resultMasculine.total_pages,
        },
    };
};
