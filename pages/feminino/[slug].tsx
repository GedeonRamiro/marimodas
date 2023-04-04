import Header from '../../components/Header';
import { client } from '../../utils/prismic-configuration';
import { GetServerSideProps } from 'next';
import BuyProduct from '../../components/BuyProduct';
import { Product } from '../../types/types';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import { routerEventsNProgress } from '../../utils/routerEventsNprogress';

type Props = {
    product: Product;
};

routerEventsNProgress();

const Feminino = ({ product }: Props) => {
    return (
        <>
            <Head>
                <title>Feminino - Marimodas</title>
            </Head>
            <Header>
                <BuyProduct product={product} />
            </Header>
        </>
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
                { size: 'GG', active: resultProduct.data['size-gg'] },
            ],
            routeCategory: 'feminino',
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
