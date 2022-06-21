import Image from 'next/image';
import Header from '../../components/Header';
import BannerMasculine from '../../public/images/banner-masculino.jpg';
import Head from 'next/head';

const OtherProducts = () => {
    return (
        <>
            <Head>
                <title>Outros Produtos - Marimodas</title>
            </Head>
            <Header>
                <blockquote className='flex justify-center text-lg sm:text-2xl my-10 font-semibold italic text-center text-slate-900 sm:mx-0 mx-4'>
                    <p className='mr-2'>Outros</p>
                    <p className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block'>
                        <span className='relative text-gray-100'>Produtos</span>
                    </p>
                </blockquote>

                <div className='flex justify-end items-center mx-4 sm:mx-0'>
                    <select className='select select-sm  select-bordered  w-full max-w-[140px]'>
                        <option disabled selected>
                            Ordenar por
                        </option>
                        <option>Mais Novos</option>
                        <option>Nome A-Z</option>
                        <option>Menor Preço</option>
                        <option>Maior Preço</option>
                    </select>
                </div>

                <div className='grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 italic lg:grid-cols-5 my-6 mx-4 sm:mx-0'>
                    <div className='mb-6'>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-2'>
                            Vestido-Short com detalhes Vestido-Short com detalhes Vestido-Short com
                            detalhes
                        </h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div className='mb-6'>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                    <div>
                        <Image
                            className='duration-300 transform hover:scale-110 hover:sepia hover:opacity-70 cursor-pointer'
                            src={BannerMasculine}
                            width={480}
                            height={600}
                            objectFit='cover'
                            alt='Banner03'
                        />
                        <h4 className='text-gray-500 text-sm mt-4'>Vestido-Short com detalhes</h4>
                        <p className='text-gray-800 font-bold'>R$ 45,50</p>
                    </div>
                </div>

                <div className='flex justify-center my-20'>
                    <div className='btn-group'>
                        <button className='btn'>«</button>
                        <button className='btn'>Page 22</button>
                        <button className='btn'>»</button>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default OtherProducts;
