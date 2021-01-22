import { EMPTY_FORM_INPUT, SET_SIGNUP_FORM_FIELD_VALUE, VALIDATE_FORM_INPUT } from './types';

export const setSignUpFormFieldValue = (key, value) => (dispatch) => {
    const data = {
        [key]: {
            value,
            error: ''
        }
    };
    dispatch({ type: SET_SIGNUP_FORM_FIELD_VALUE, data });
};

export const validateFormInput = () => (dispatch) => {
    dispatch({ type: VALIDATE_FORM_INPUT });
};

export const clearFormInput = () => (dispatch) => {
    dispatch({ type: EMPTY_FORM_INPUT });
};
