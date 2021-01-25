import React from 'react';
import './BtnClose.css';

const BtnClose = ({ action }) => (
    <button className="BtnClose" type="button" onClick={action}>
        <img className="BtnClose__img" src="https://www.svgrepo.com/show/30681/close.svg" alt="close" />
    </button>
);

export default BtnClose;
