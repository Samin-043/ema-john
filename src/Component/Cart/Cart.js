import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, products } = props;

    let totalPrice = 0;
    let totalShippingCharge = 0;
    let totalTax = 0;
    let grandTotal = 0;


    for (const product of cart) {
        // console.log(product.price);
        totalPrice = totalPrice + product.price;
        console.log(totalPrice);

        totalShippingCharge = totalShippingCharge + product.shipping;
        console.log(`Total shipping charge : ${totalShippingCharge}`);

        //10% tax per product
        totalTax = totalTax + (product.price * 0.01);

        grandTotal = totalPrice + totalShippingCharge + totalTax;
        console.log(grandTotal);
    }


    return (
        <div>
            <h1 className='orderSummary'>Order Summary</h1>
            <p className='orderStatus'>Selected Items : <strong>{cart.length}</strong></p>
            <p className='orderStatus'>Total Price : <strong>${totalPrice}</strong></p>
            <p className='orderStatus'>Total Shipping charge : <strong>${totalShippingCharge}</strong></p>
            <p className='orderStatus'>Tax : <strong>${totalTax.toFixed(2)}</strong></p>
            <h4><strong>Grand Total : ${grandTotal.toFixed(2)}</strong></h4>
        </div>
    );
};

export default Cart;
