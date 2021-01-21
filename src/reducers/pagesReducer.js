import { TOGGLE_CART, TOGGLE_CATALOG } from '../actions/types';

const initialState = {
    isCartOpen: false,
    isCatalogOpen: false
};

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_CART: return { ...state, isCartOpen: action.value };
    case TOGGLE_CATALOG: return { ...state, isCatalogOpen: action.value };
    default: return state;
    }
};
