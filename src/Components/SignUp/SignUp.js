import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import Popup from '../Popup/Popup';
import { toggleSignUp } from '../../actions/popupsActions';
import { setSignUpFormFieldValue, updateFields, clearFormInput } from '../../actions/signUpFormActions';
import { validateForm } from './validate';
import './SignUp.css';

const SignUp = (props) => {
    const close = () => {
        props.clearFormInput();
        props.toggleSignUp(false);
    };
    const onSubmit = (ev) => {
        ev.preventDefault();
        const { hasErrors, fields } = validateForm(props.fields);
        if (!hasErrors) {
            close();
        } else {
            props.updateFields(fields);
        }
    };

    return (
        <Popup isOpen={props.isOpen} onDecline={close}>
            <div className="SignUp card">
                <h2>Sign Up</h2>
                <SignUpForm onSubmit={onSubmit} />
            </div>
        </Popup>
    );
};

const mapStateToProps = ({ pages, signUpForm }) => ({
    isOpen: pages.isSignUpOpen,
    fields: signUpForm.fields
});

export default connect(mapStateToProps, {
    toggleSignUp,
    setSignUpFormFieldValue,
    updateFields,
    clearFormInput
})(SignUp);
