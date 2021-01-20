import { FETCH_PRODUCTS } from '../actions/types';

export const initialState = {
    items: [],
    product: {}
};

export function productReducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_PRODUCTS: return { ...state, items: action.data };
    default: return state;
    }
}
