export const required = (value) => value.trim().length > 0;

export const isEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
};

export const isValidPassword = (value) => value.length >= 6;

export const isValidPasswordConfirmation = (value, confirmation) => value === confirmation;

export const clearForm = ({ fields, hasErrors }) => {
    const updatedFields = {};
    Object.keys(fields).forEach((fieldName) => {
        updatedFields[fieldName] = { value: '', error: '' };
    });
    return { fields: updatedFields, hasErrors };
};
