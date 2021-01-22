import { TOGGLE_CART, TOGGLE_SIGNUP } from '../actions/types';

const initialState = {
    isCartOpen: false,
    isSignUpOpen: false
};

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_CART: return { ...state, isCartOpen: action.value };
    case TOGGLE_SIGNUP: return { ...state, isSignUpOpen: action.value };
    default: return state;
    }
};
