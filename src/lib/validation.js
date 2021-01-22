const required = (value) => value.trim().length > 0;

const isEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
};

const isValidPassword = (value) => value.length >= 6;

export const validateForm = ({ fields }) => {
    const updatedFields = {};
    let hasErrors = false;
    Object.keys(fields).forEach((fieldName) => {
        let { error } = fields[fieldName];
        const { value } = fields[fieldName];
        switch (fieldName) {
        case 'email':
            if (!isEmail(value) && !required(value)) {
                error = 'Email is not valid! Email should contain @ character.';
            }
            break;
        case 'password':
            if (!isValidPassword(value) && !required(value)) {
                error = 'Password should be at least 6 characters long!';
            }
            break;
        default:
            if (!required(value)) {
                error = 'This field is required!';
            }
        }
        if (error) hasErrors = true;
        updatedFields[fieldName] = { error, value };
    });
    return { fields: updatedFields, hasErrors };
};

export const clearForm = ({ fields, hasErrors }) => {
    const updatedFields = {};
    Object.keys(fields).forEach((fieldName) => {
        updatedFields[fieldName] = { value: '', error: '' };
    });
    return { fields: updatedFields, hasErrors };
};
