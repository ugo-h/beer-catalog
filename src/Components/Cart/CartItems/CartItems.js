import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartItems = ({ items }) => (
    <ul>
        {items.map((item) => <CartItem item={item} />)}
    </ul>
);

export default CartItems;
