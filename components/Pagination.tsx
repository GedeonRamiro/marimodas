import { useState } from 'react';
import { BiLastPage, BiFirstPage } from 'react-icons/bi';

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
    totalPage: number;
    currentPage: number;
    navigatePage: (page: number) => void;
};

const Pagination = ({ totalPage, currentPage, navigatePage }: Props) => {
    return (
        <div className='flex justify-center my-6 sm:my-20'>
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
    );
};

export default Pagination;
