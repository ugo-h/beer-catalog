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
                <CartItems items={props.items} />
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
