import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/productActions';
import './CartItem.css';

const CartItem = (props) => {
    const remove = () => {
        const newItem = { ...props.item, isInCart: false };
        props.addToCart(newItem);
    };
    return (
        <li className="CartItem" key={props.item.id}>
            <span className="CartItem__content">
                <img className="CartItem__img" src={props.item.imgUrl} alt={props.item.name} />
                <h3 className="CartItem__title">{props.item.name}</h3>
            </span>
            <button className="CartItem__remove" type="button" onClick={remove}>
                <img src="https://www.svgrepo.com/show/264838/remove.svg" alt="remove" />
            </button>
        </li>
    );
};

export default connect(null, { addToCart })(CartItem);
