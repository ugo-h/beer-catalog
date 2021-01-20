/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { sortByName } from '../../actions/productActions';

const Header = (props) => {
    const sortHandler = props.sortByName;
    const onSortBtnClick = () => {
        sortHandler();
    };
    return (
        <header className="Header">
            <button className="Header__btn" type="button" onClick={onSortBtnClick}>Sort by name</button>
            <button className="Header__btn" type="button">Sort by date</button>
        </header>
    );
};

export default connect(null, { sortByName })(Header);
