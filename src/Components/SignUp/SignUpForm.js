import React from 'react';
import Field from './SignUpField';

const SignUpForm = ({ onSubmit }) => (
    <form onSubmit={onSubmit} className="SignUpForm" id="sign-up-form">
        <Field label="First name" type="text" name="firstName" />
        <Field label="Last name" type="text" name="lastName" />
        <Field label="Email" type="email" name="email" />
        <Field label="Password" type="password" name="password" />
        <Field label="Confirm password" type="password" name="confirmPassword" />
        <button className="SignUpForm__submit" type="submit" form="sign-up-form">Sign Up</button>
    </form>
);

export default SignUpForm;
