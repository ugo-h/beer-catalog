import React from 'react';
import './ProductList.css';

const ProductList = ({ products, template }) => (
    <ul className="Products">
        {products.map((product) => <li className="Product" key={product.id}>{template(product)}</li>)}
    </ul>
);

export default ProductList;
