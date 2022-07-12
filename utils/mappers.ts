export const ProductsMapper = (products: any) => {
    const mapper = products.results.map((data: any) => {
        const dataProducts = {
            id: data.id,
            slug: data.uid,
            date: data.last_publication_date,
            image: data.data.image,
            name: data.data.name,
            description: data.data.description,
            price: data.data.price,
        };

        if (data.data.available || data.data.available === false) {
            return {
                ...dataProducts,
                available: data.data.available,
            };
        }

        return {
            ...dataProducts,
            sizeP: data.data['size-p'] ? data.data['size-p'] : '',
            sizeM: data.data['size-m'] ? data.data['size-m'] : '',
            sizeG: data.data['size-g'] ? data.data['size-g'] : '',
        };
    });

    return mapper;
};
