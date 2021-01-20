import React, { useState } from 'react';
import './BeerItem.css';

function BeerItem(item) {
    const [isChecked, setCheck] = useState(false);
    const addToCart = () => setCheck(!isChecked);
    return (
        <div className="Item card">
            <img className="Item__img card__img" src={item.image_url} alt={item.name} />
            <h3 className="Item__title card__text">{item.name}</h3>
            <button type="button" className="Item__add-to-cart" onClick={addToCart}>
                <span className="card__text">Add to card</span>
                <input className="Item__checkbox" type="checkbox" checked={isChecked} onChange={addToCart} />
            </button>
        </div>
    );
}

export default BeerItem;
