import React from 'react';

const SortingOptions = (props) => (
    <>
        <button className="Header__btn" type="button" onClick={props.onSortBtnClick}>
            Sort ({props.isAcsending ? 'acsending' : 'decsending'})
        </button>
        <label htmlFor="select-sort">
            {'Sort by '}
            <select className="Header__btn Header__select" id="select-sort" onChange={props.onSortSelect}>
                <option className="Header__select__option" value="name">Name</option>
                <option className="Header__select__option" value="abv">ABV</option>
                <option className="Header__select__option" value="ibu">IBU</option>
            </select>
        </label>
    </>
);

export default SortingOptions;
