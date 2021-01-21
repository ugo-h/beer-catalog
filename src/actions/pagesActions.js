import { TOGGLE_CART, TOGGLE_CATALOG } from './types';

export const toggleCart = (value) => (dispatch) => {
    dispatch({ type: TOGGLE_CART, value });
};

export const toggleCatalog = (value) => (dispatch) => {
    dispatch({ type: TOGGLE_CATALOG, value });
};
