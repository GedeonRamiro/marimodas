import Header from '../../components/Header';
import * as prismic from '@prismicio/client';
import { GetServerSideProps } from 'next';
import { client } from '../../utils/prismic-configuration';
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
    relatedProductsOthers: Product[];
};

const OtherProducts = ({ product, relatedProductsOthers }: Props) => {
    return (
        <Header>
            <BuyProduct product={product} />

            {/*  {relatedProductsOthers.length < 5 ? (
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
                            products={relatedProductsOthers}
                            routerProduct={product.routeCategory}
                        />
                    </div>
                </>
            )} */}
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

        const resultProductsOthers = await client.query(
            prismic.Predicates.at('document.type', 'others')
        );

        const relatedProductsOthers = ProductsMapper(resultProductsOthers);

        return {
            props: {
                product,
                relatedProductsOthers,
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
