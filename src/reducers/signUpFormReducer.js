import { SET_SIGNUP_FORM_FIELD_VALUE, VALIDATE_FORM_INPUT, EMPTY_FORM_INPUT } from '../actions/types';
import { validateForm, clearForm } from '../lib/validation';

const initialState = {
    fields: {
        firstName: { value: '', error: '' },
        lastName: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        confirmPassword: { value: '', error: '' }
    },
    hasErrors: false
};

export const signUpFormReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_SIGNUP_FORM_FIELD_VALUE: return {
        ...state, fields: { ...state.fields, ...action.data }
    };
    case VALIDATE_FORM_INPUT: return validateForm(state);
    case EMPTY_FORM_INPUT: return clearForm(state);
    default: return state;
    }
};
