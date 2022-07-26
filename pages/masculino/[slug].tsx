import Header from '../../components/Header';
import { client } from '../../utils/prismic-configuration';
import { GetServerSideProps } from 'next';
import BuyProduct from '../../components/BuyProduct';
import { Product } from '../../types/types';

type Props = {
    product: Product;
};

const Masculine = ({ product }: Props) => {
    return (
        <Header>
            <BuyProduct product={product} />
        </Header>
    );
};

export default Masculine;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug }: any = params;

    try {
        const resultProduct = await client.getByUID('masculino', String(slug), {});

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
            routeCategory: 'masculino',
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
