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

export const orderProducts = (order: string, products: Products[]) => {
    if (order === 'newsProducts') {
        const result = products.sort((x, y) => {
            let a = new Date(x.date).getTime();
            let b = new Date(y.date).getTime();

            return b - a;
        });

        return result;
    }

    if (order === 'alphabeticalOrder') {
        const result = products.sort((x, y) => {
            let a = x.name.toLocaleLowerCase(),
                b = y.name.toLocaleLowerCase();

            return a == b ? 0 : a > b ? 1 : -1;
        });

        return result;
    }

    if (order === 'smallerPrice') {
        const result = products.sort((x, y) => {
            return x.price - y.price;
        });

        return result;
    }

    if (order === 'largerPrice') {
        const result = products.sort((x, y) => {
            return y.price - x.price;
        });

        return result;
    }
};
