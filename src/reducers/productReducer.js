import { ADD_TO_CART, FETCH_PRODUCTS } from '../actions/types';

export const initialState = {
    items: [],
    item: {}
};

export function productReducer(state = initialState, action) {
    switch (action.type) {
    case FETCH_PRODUCTS: return { ...state, items: action.data };
    case ADD_TO_CART: return {
        ...state,
        items: state.items.map((item) => (
            item.id === action.data.id
                ? { ...action.data }
                : item
        )),
        item: action.data
    };
    default: return state;
    }
}
