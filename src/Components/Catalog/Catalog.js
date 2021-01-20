/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from '../ProductList/ProductList';
import BeerItem from '../BeerItem/BeerItem';
import { fetchProducts } from '../../actions/productActions';

function Catalog(props) {
    useEffect(() => props.fetchProducts(), [props]);
    return (
        <ProductList products={props.products} template={BeerItem} />
    );
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = ({ products }) => {
    return {
        products: products.items
    };
};

export default connect(mapStateToProps, { fetchProducts })(Catalog);
