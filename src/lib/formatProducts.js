/* eslint-disable camelcase */
export const formatProducts = (products) => (
    products.map(({ id, name, image_url, abv, ibu }) => (
        {
            id,
            name,
            imgUrl: image_url,
            abv,
            ibu,
            isInCart: false
        }
    ))
);
