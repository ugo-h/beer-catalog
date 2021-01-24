import { EMPTY_FORM_INPUT, SET_SIGNUP_FORM_FIELD_VALUE, UPDATE_FIELDS } from './types';

export const setSignUpFormFieldValue = (key, value) => (dispatch) => {
    const data = {
        [key]: {
            value,
            error: ''
        }
    };
    dispatch({ type: SET_SIGNUP_FORM_FIELD_VALUE, data });
};

export const updateFields = (fields) => (dispatch) => {
    dispatch({ type: UPDATE_FIELDS, data: fields });
};

export const clearFormInput = () => (dispatch) => {
    dispatch({ type: EMPTY_FORM_INPUT });
};
