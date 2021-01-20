/* eslint-disable camelcase */
export const formatProducts = (products) => (
    products.map(({ id, name, image_url }) => (
        {
            id,
            name,
            imgUrl: image_url,
            isInCart: false
        }
    ))
);
