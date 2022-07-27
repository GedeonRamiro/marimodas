import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import bannerSobre from '../../public/images/banner-sobre.png';

const Sobre = () => {
    return (
        <>
            <Head>
                <title>Informações CAT INFO!</title>
            </Head>
            <Header>
                <div className='my-10 md:my-20'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col-reverse md:flex-row items-center'>
                            <div className='flex flex-col w-full md:w-1/2 justify-center items-start  px-6'>
                                <h1 className='font-bold text-3xl my-4'>Marimodas</h1>
                                <p className='leading-normal mb-4'>
                                    Somos especializados na venda de roupas, tupperware, e outros
                                    produtos. Trazer à tona no mercado após identificarmos a
                                    necessidade de consumo com nossa realidade. Nossa missão é
                                    oferecer a todos nossos clientes esses produtos de qualidade,
                                    unindo tudo isso a um preço super acessível.
                                </p>
                            </div>
                            <div className='md:w-1/2 md:py-6 text-center mx-6 sm:mx-0'>
                                <Image
                                    className='rounded-lg'
                                    src={bannerSobre}
                                    alt='imagem Marimodas'
                                    objectFit='cover'
                                    width={720}
                                    height={410}
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Sobre;
