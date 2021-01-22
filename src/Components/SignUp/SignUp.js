import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import Popup from '../Popup/Popup';
import { toggleSignUp } from '../../actions/pagesActions';
import { setSignUpFormFieldValue, validateFormInput, clearFormInput } from '../../actions/signUpFormActions';
import './SignUp.css';

const SignUp = (props) => {
    const close = () => props.toggleSignUp(false);
    const onSubmit = (ev) => {
        ev.preventDefault();
        props.validateFormInput();
        if (!props.hasErrors) {
            props.clearFormInput();
            close();
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
    hasErrors: signUpForm.hasErrors
});

export default connect(mapStateToProps, {
    toggleSignUp,
    setSignUpFormFieldValue,
    validateFormInput,
    clearFormInput
})(SignUp);
