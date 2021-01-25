/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Catalog.css';
import ProductList from '../ProductList/ProductList';
import BeerItem from '../BeerItem/BeerItem';
import { fetchProducts } from '../../actions/productActions';
import { searchBy } from '../../lib/lib';
import Paginator from './CatalogPaginator';

function Catalog(props) {
    const fetchProds = props.fetchProducts;
    useEffect(() => {
        if (props.products.length <= 0) fetchProds();
    }, [fetchProds, props.products.length]);
    return (
        <div className="Catalog">
            <div className="Catalog__header">
                <h1>Brewdog&apos;s beer catalog</h1>
                <h4>Page: {props.currentPage}/{props.numberOfPages}</h4>
            </div>
            <ProductList products={props.products} template={BeerItem} />
            <Paginator pages={props.numberOfPages} />
        </div>
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
    const { currentPage, productsPerPage } = products;
    const numberOfPages = Math.round(items.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const end = currentPage * productsPerPage;
    items = items.slice(start, end);
    return {
        products: items,
        item: products.item,
        numberOfPages,
        currentPage: products.currentPage
    };
};

export default connect(mapStateToProps, { fetchProducts })(Catalog);
