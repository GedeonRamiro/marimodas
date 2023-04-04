import Header from '../../components/Header';
import { GetServerSideProps } from 'next';
import { client } from '../../utils/prismic-configuration';
import BuyProduct from '../../components/BuyProduct';
import { Product } from '../../types/types';
import { routerEventsNProgress } from '../../utils/routerEventsNprogress';
import Head from 'next/head';

type Props = {
    product: Product;
};

routerEventsNProgress();

const Tupperware = ({ product }: Props) => {
    return (
        <>
            <Head>
                <title>Tupperware - Marimodas</title>
            </Head>
            <Header>
                <BuyProduct product={product} />
            </Header>
        </>
    );
};

export default Tupperware;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug }: any = params;

    try {
        const resultProduct = await client.getByUID('tupperware', String(slug), {});

        const product = {
            id: resultProduct.id,
            image: resultProduct.data.image,
            name: resultProduct.data.name,
            description: resultProduct.data.description,
            price: resultProduct.data.price,
            pieceSize: [{ size: 'single', active: resultProduct.data['available'] }],
            routeCategory: 'tupperware',
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
