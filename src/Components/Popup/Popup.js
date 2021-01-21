/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDom from 'react-dom';
import './Popup.css';

const Popup = ({ isOpen, children, onDecline }) => (
    ReactDom.createPortal(
        <>
            {isOpen
                ? (
                    <>
                        <div className="Backdrop" onClick={onDecline} />
                        {children}
                    </>
                )
                : ''}
        </>,
        document.getElementById('root-modal')
    )
);

export default Popup;
