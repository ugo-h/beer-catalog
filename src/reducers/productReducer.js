import { ADD_TO_CART, FETCH_PRODUCTS, SEARCH_PRODUCTS, SET_PAGE, SORT } from '../actions/types';
import { setSortBy, sortImmutable } from '../lib/lib';

export const initialState = {
    items: [],
    item: {},
    filter: '',
    currentPage: 1,
    productsPerPage: 18
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
    case SORT: {
        const { propType, sortBy, isAcsending } = action.data;
        return {
            ...state,
            items: sortImmutable(state.items, setSortBy(sortBy, propType)(isAcsending))
        };
    }
    case SEARCH_PRODUCTS: return { ...state, filter: action.data.query };
    case SET_PAGE: {
        const { page } = action.data;
        if (page < 1 || page > state.items.length / state.productsPerPage) return state;
        return { ...state, currentPage: page };
    }
    default: return state;
    }
}
