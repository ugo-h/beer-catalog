import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { searchProducts } from '../../actions/productActions';
import { setSearchQuery, setSearchTimer } from '../../actions/searchActions';

const Search = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
        props.searchProducts(props.query);
    };

    const onChange = ({ target }) => {
        props.setSearchQuery(target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search-input">
                Search
                <input id="search-input" onChange={onChange} />
            </label>
        </form>
    );
};

const mapStateToProps = ({ search }) => ({
    timer: search.timer,
    query: search.query
});

export default connect(mapStateToProps, { searchProducts, setSearchQuery, setSearchTimer })(Search);
