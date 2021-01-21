import { FETCH_PRODUCTS, ADD_TO_CART, SORT } from './types';
import initBeerAPI from '../API/BeerAPI';
import { formatProducts } from '../lib/lib';

const beerAPI = initBeerAPI();

export const fetchProducts = () => (dispatch) => {
    beerAPI.getBeerPage(1).then((data) => {
        dispatch({ type: FETCH_PRODUCTS, data: formatProducts(data) });
    });
};

export const addToCart = (data) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, data });
};

export const sortProducts = (data) => (dispatch) => {
    const propType = data.sortBy === 'name' ? 'string' : 'number';
    dispatch({ type: SORT, data: { ...data, propType } });
};
