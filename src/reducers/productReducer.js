import { ADD_TO_CART, FETCH_PRODUCTS, SORT_BY_NAME } from '../actions/types';
import { sortByNameOption, sortImmutable } from '../lib/lib';

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
    case SORT_BY_NAME: return { ...state, items: sortImmutable(state.items, sortByNameOption) };
    default: return state;
    }
}
