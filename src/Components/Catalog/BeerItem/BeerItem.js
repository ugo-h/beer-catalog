/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import './BeerItem.css';
import { addToCart } from '../../../actions/productActions';

function BeerItem(props) {
    const { item } = props;

    const addItemtoCart = () => {
        const newItem = { ...item, isInCart: !item.isInCart };
        props.addToCart(newItem);
    };
    return (
        <div className="Item card">
            <img className="Item__img card__img" src={item.imgUrl} alt={item.name} />
            <h3 className="Item__title card__text">{item.name}</h3>
            <div className="Item__content">
                <div className="card__text">ABV: {item.abv}</div>
                <div className="card__text">IBU: {item.ibu}</div>
            </div>
            <button type="button" className="Item__add-to-cart">
                <span className="card__text">Add to card</span>
                <input className="Item__checkbox" type="checkbox" checked={item.isInCart} onChange={addItemtoCart} />
            </button>
        </div>
    );
}

export default connect(null, { addToCart })(BeerItem);
