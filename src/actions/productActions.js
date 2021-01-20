import { FETCH_PRODUCTS } from './types';
import initBeerAPI from '../API/BeerAPI';

const beerAPI = initBeerAPI();

export const fetchProducts = () => (dispatch) => {
    beerAPI.getBeerPage(1).then((data) => {
        dispatch({ type: FETCH_PRODUCTS, data });
    });
};
