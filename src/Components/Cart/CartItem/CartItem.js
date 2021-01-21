import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/productActions';

const CartItem = (props) => {
    const remove = () => props.addToCart(false);
    return (
        <li>
            <h3>{props.item.name}</h3>
            <button type="button" onClick={remove}>remove</button>
        </li>
    );
};

export default connect(null, { addToCart })(CartItem);
