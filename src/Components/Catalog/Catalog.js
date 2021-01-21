/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from '../ProductList/ProductList';
import BeerItem from '../BeerItem/BeerItem';
import { fetchProducts } from '../../actions/productActions';
import { searchBy } from '../../lib/lib';

function Catalog(props) {
    const fetchProds = props.fetchProducts;
    useEffect(() => fetchProds(), [fetchProds]);
    return (
        <ProductList products={props.products} template={BeerItem} />
    );
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = ({ products }) => {
    let items;
    if (products.filter) {
        items = searchBy('name')([...products.items], products.filter);
    } else {
        items = products.items;
    }
    return {
        products: items,
        item: products.item
    };
};

export default connect(mapStateToProps, { fetchProducts })(Catalog);
