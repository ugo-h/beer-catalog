import { isEmail, required, isValidPassword, isValidPasswordConfirmation } from '../../lib/validation';

export const validateForm = (fields) => {
    const updatedFields = {};
    let hasErrors = false;
    Object.keys(fields).forEach((fieldName) => {
        let { error } = fields[fieldName];
        const { value } = fields[fieldName];
        switch (fieldName) {
        case 'email':
            if (!isEmail(value) || !required(value)) {
                error = 'Email is not valid! Please enter a valid email.';
            }
            break;
        case 'password':
            if (!isValidPassword(value) || !required(value)) {
                error = 'Password should be at least 6 characters long!';
            }
            break;
        case 'confirmPassword':
            if (!isValidPasswordConfirmation(value, fields.password.value)) {
                error = 'Password confirmation does not match the password!';
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
    return { fields: { ...fields, ...updatedFields }, hasErrors };
};
