import { TOGGLE_CART, TOGGLE_SIGNUP } from './types';

export const toggleCart = (value) => (dispatch) => {
    dispatch({ type: TOGGLE_CART, value });
};

export const toggleSignUp = (value) => (dispatch) => {
    dispatch({ type: TOGGLE_SIGNUP, value });
};
