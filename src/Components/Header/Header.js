/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { sortProducts } from '../../actions/productActions';
import { setCurrentSort } from '../../actions/headerActions';

const Header = (props) => {
    const onSortBtnClick = () => {
        props.sortProducts({ sortBy: props.sortBy, isAcsending: props.isAcsending });
        props.setCurrentSort({ sortBy: props.sortBy, isAcsending: !props.isAcsending });
    };

    const onSortSelect = ({ target }) => {
        props.setCurrentSort({ sortBy: target.value, isAcsending: true });
    };

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
        </header>
    );
};

const mapStateToProps = ({ sortSettings }) => ({
    isAcsending: sortSettings.isAcsending,
    sortBy: sortSettings.sortBy
});

export default connect(mapStateToProps, { sortProducts, setCurrentSort })(Header);
