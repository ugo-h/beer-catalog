import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartItems = ({ items }) => (
    items.length > 0
        ? (
            <ul className="Cart__list">
                {items.map((item) => <CartItem item={item} />)}
            </ul>
        )
        : <h3>Your cart is empty...</h3>
);

export default CartItems;
