import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart]=useState([]);

    useEffect(() => {
        fetch('product_data.json')
            .then(response => response.json())
            .then(productData => setProduct(productData))
    }, []);
    
    const totalItems=(product)=>{        
        const newCart=[...cart,product];
        setCart(newCart);
        alert('Product add to cart');
    }

    return (
        <div className='shop'>
            <div className="product">
                <h1>Total Product</h1>
                {
                    products.map(product => <Product price={product.price}
                        img={product.img}
                        name={product.name}
                        key={product.id}
                        seller={product.seller}
                        rating={product.ratings}

                        addItem={
                            () => {
                                totalItems(product)
                            }
                        }
                    ></Product>
                    )
                }
            </div>

            <div className="cart">
                <Cart cart={cart} products={products}></Cart>
            </div>
        </div>
    )
}

export default Shop;