import React from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { searchProducts, setPage } from '../../actions/productActions';
import { setSearchQuery, setSearchTimer } from '../../actions/searchActions';

const Search = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onChange = ({ target }) => {
        props.setSearchQuery(target.value);
        if (props.timer) {
            clearTimeout(props.timer);
        }
        const timer = setTimeout(() => {
            props.setPage(1);
            props.searchProducts(target.value);
        }, 500);
        props.setSearchTimer(timer);
    };

    return (
        <form className="Search" onSubmit={onSubmit}>
            <label className="Search__field" htmlFor="search-input">
                Search
                <input className="Search__input" id="search-input" onChange={onChange} />
            </label>
        </form>
    );
};

const mapStateToProps = ({ search }) => ({
    timer: search.timer,
    query: search.query
});

export default connect(mapStateToProps, {
    searchProducts,
    setSearchQuery,
    setSearchTimer,
    setPage
})(Search);
