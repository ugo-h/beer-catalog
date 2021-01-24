/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { sortProducts } from '../../actions/productActions';
import { setCurrentSort } from '../../actions/headerActions';
import { toggleCart, toggleSignUp } from '../../actions/popupsActions';
import Search from '../Search/Search';

const Header = (props) => {
    const onSortBtnClick = () => {
        props.sortProducts({ sortBy: props.sortBy, isAcsending: props.isAcsending });
        props.setCurrentSort({ sortBy: props.sortBy, isAcsending: !props.isAcsending });
    };

    const onSortSelect = ({ target }) => {
        props.setCurrentSort({ sortBy: target.value, isAcsending: true });
    };

    const onCartClick = () => { props.toggleCart(true); };

    const onSignUpClick = () => (props.toggleSignUp(true));

    return (
        <header className="Header">
            <button className="Header__btn" type="button" onClick={onSortBtnClick}>
                Sort ({props.isAcsending ? 'acsending' : 'decsending'})
            </button>
            <label htmlFor="select-sort">
                {'Sort by '}
                <select id="select-sort" onChange={onSortSelect}>
                    <option value="name">Name</option>
                    <option value="abv">ABV</option>
                    <option value="ibu">IBU</option>
                </select>
            </label>
            <Search />
            <button type="button" onClick={onCartClick}>Cart</button>
            <button type="button" onClick={onSignUpClick}>Sign Up</button>
        </header>
    );
};

const mapStateToProps = ({ sortSettings }) => ({
    isAcsending: sortSettings.isAcsending,
    sortBy: sortSettings.sortBy
});

export default connect(mapStateToProps, {
    sortProducts,
    setCurrentSort,
    toggleCart,
    toggleSignUp
})(Header);
