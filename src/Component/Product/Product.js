import React, { useState } from 'react';
import './Product.css'

const Product = (props) => {
    let [price,totalPrice]=useState([]);    
    return (
        <div className='item w-100'>
            <img className='productImage' src={props.img} alt='image'></img>

            <h6>{props.name}</h6>
            <h5><span className='priceTitle my-0'>price : </span>${props.price}</h5>

            <p className='seller my-0'> <span className='priceTitle my-0'>Manufacturer</span>: ${props.seller}</p>
            <p className='rating my-0'><span className='priceTitle my-0'> Rating: </span> ${props.rating} star</p>

            <button className='btn-cart' onClick={props.addItem}>
                <p id='addToCart'>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;
