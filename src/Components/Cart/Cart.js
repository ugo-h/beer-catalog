import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import { filterBy } from '../../lib/lib';
import CartItems from './CartItems/CartItems';
import Popup from '../Popup/Popup';
import { toggleCart } from '../../actions/pagesActions';

const Cart = (props) => {
    const closeCart = () => props.toggleCart(false);
    return (
        <Popup isOpen={props.isCartOpen} onDecline={closeCart}>
            <div className="Cart card">
                <h2 className="Cart__title">Cart</h2>
                <CartItems items={props.items} />
                <div className="Cart__controls">
                    <button className="btn--ok" type="button" onClick={closeCart}>Continue shopping</button>
                    {props.items.length > 0 ? <button className="btn--success" type="button" onClick={closeCart}>Checkout</button> : ''}
                </div>
            </div>
        </Popup>
    );
};

const mapStateToProps = ({ products, pages }) => {
    const items = filterBy('isInCart')([...products.items], true);
    return {
        items,
        isCartOpen: pages.isCartOpen
    };
};

export default connect(mapStateToProps, { toggleCart })(Cart);
