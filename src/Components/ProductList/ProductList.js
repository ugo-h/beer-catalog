import React from 'react';
import BeerItem from '../BeerItem/BeerItem';
import './ProductList.css';

const ProductList = ({ products }) => (
    <ul className="Products">
        {products.map((product) => <li className="Product" key={product.id}><BeerItem item={product} /></li>)}
    </ul>
);

export default ProductList;
