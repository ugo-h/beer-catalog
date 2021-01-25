/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { sortProducts } from '../../actions/productActions';
import { setCurrentSort, toggleExploreMenu } from '../../actions/headerActions';
import { toggleCart, toggleSignUp } from '../../actions/popupsActions';
import Search from '../Search/Search';
import SortingOptions from './SortingOptions/SortingOptions';

const Header = (props) => {
    const onSortBtnClick = () => {
        props.sortProducts({ sortBy: props.sortBy, isAcsending: props.isAcsending });
        props.setCurrentSort({ sortBy: props.sortBy, isAcsending: !props.isAcsending });
    };

    const onSortSelect = ({ target }) => {
        props.setCurrentSort({ sortBy: target.value, isAcsending: true });
    };

    const onCartClick = () => (props.toggleCart(true));

    const onSignUpClick = () => (props.toggleSignUp(true));

    const toggleExplore = () => (props.toggleExploreMenu(!props.isExploreOpen));

    const openExploreClass = props.isExploreOpen ? ' isOpen' : '';

    return (
        <header className="Header">
            <div className={`Header__explore-menu ${openExploreClass}`}>
                <SortingOptions onSortBtnClick={onSortBtnClick} onSortSelect={onSortSelect} />
                <Search />
            </div>
            <button className="Header__btn Nav__explore" type="button" onClick={toggleExplore}>Explore!</button>
            <button className="Header__btn" type="button" onClick={onCartClick}>Cart</button>
            <button className="Header__btn" type="button" onClick={onSignUpClick}>Sign Up</button>
        </header>
    );
};

const mapStateToProps = ({ header }) => ({
    isAcsending: header.isAcsending,
    sortBy: header.sortBy,
    isExploreOpen: header.isExploreMenuOpen
});

export default connect(mapStateToProps, {
    sortProducts,
    setCurrentSort,
    toggleCart,
    toggleSignUp,
    toggleExploreMenu
})(Header);
