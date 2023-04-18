import React, { useState } from 'react';
import './Product.css'

const Product = (props) => {
    let [price,totalPrice]=useState([]);    
    return (
        <div className='item'>
            <img className='productImage' src={props.img} alt='image'></img>

            <h6>{props.name}</h6>
            <h5>price : ${props.price}</h5>

            <p className='seller'>Manufacturer: {props.seller}</p>
            <p className='rating'>Rating: {props.rating} star</p>

            <button className='btn-cart' onClick={props.addItem}>
                <p id='addToCart'>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;
