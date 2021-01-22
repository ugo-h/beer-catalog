import React from 'react';
import './Field.css';
import { connect } from 'react-redux';
import { setSignUpFormFieldValue } from '../../actions/signUpFormActions';

const Field = ({ label, name, fields, type, setSignUpFormFieldValue: setFieldValue }) => {
    const onChange = ({ target }) => setFieldValue(name, target.value);
    const { value, error } = fields[name];
    return (
        <label className="Field" htmlFor={`${name}-input`}>
            {label}
            <input value={value} type={type} className="Field__input" id={`${name}-input`} onChange={onChange} />
            {error ? <span className="Field__error-container">{error}</span> : ''}
        </label>
    );
};

const mapStateToProps = ({ signUpForm }) => ({
    fields: { ...signUpForm.fields }
});

export default connect(mapStateToProps, { setSignUpFormFieldValue })(Field);
