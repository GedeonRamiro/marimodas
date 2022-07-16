import Header from '../../components/Header';
import * as prismic from '@prismicio/client';
import { client } from '../../utils/prismic-configuration';
import { GetServerSideProps } from 'next';
import BuyProduct from '../../components/BuyProduct';
import { ProductsMapper } from '../../utils/mappers';
import SlideRelatedProducts from '../../components/SlideRelatedProducts';

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
    relatedProductsFeminine: Product[];
};

const Feminino = ({ product, relatedProductsFeminine }: Props) => {
    return (
        <Header>
            <BuyProduct product={product} />

            {/*   {relatedProductsFeminine.length < 5 ? (
                <div className='mb-0 sm:mb-10'></div>
            ) : (
                <>
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
                        <SlideRelatedProducts
                            products={relatedProductsFeminine}
                            routerProduct={product.routeCategory}
                        />
                    </div>
                </>
            )} */}
        </Header>
    );
};

export default Feminino;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug }: any = params;

    try {
        const resultProduct = await client.getByUID('feminino', String(slug), {});

        const product = {
            id: resultProduct.id,
            image: resultProduct.data.image,
            name: resultProduct.data.name,
            description: resultProduct.data.description,
            price: resultProduct.data.price,
            pieceSize: [
                { size: 'P', active: resultProduct.data['size-p'] },
                { size: 'M', active: resultProduct.data['size-m'] },
                { size: 'G', active: resultProduct.data['size-g'] },
            ],
            routeCategory: 'feminino',
        };

        const resultProductsFeminine = await client.query(
            prismic.Predicates.at('document.type', 'feminino')
        );

        const relatedProductsFeminine = ProductsMapper(resultProductsFeminine);

        return {
            props: {
                product,
                relatedProductsFeminine,
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
