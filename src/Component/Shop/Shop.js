import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Button, Card, Modal, Offcanvas } from 'react-bootstrap';

const Shop = () => {

    // useState hook for initial state 
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    // useEffect hook for outside dynamic data
    useEffect(() => {
        fetch('product_data.json')
            .then(response => response.json())
            .then(productData => setProduct(productData))
    }, []);

    // when add a new product in cart
    const totalItems = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        alert('Product add to cart');
    }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // return state
    return (
        <div className='container-fluid'>
            <Card className='border-0'>
                <Card.Body className='p-0'>
                    <h1>All Product</h1>
                </Card.Body>
            </Card>

            <Card className='border-0'>
                <Card.Body className=''>
                    <div className="row">
                        <div className="col-lg-10 col-md-9 col-9">
                            <div className="row">
                                {
                                    products.map(product =>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                            <Product price={product.price}
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
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-3">
                            <Card className='border-0'>
                                <Card.Body>
                                    <Card.Body className='cartButtonModify mx-auto p-0'>
                                        <Button variant="primary" onClick={handleShow}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                            <span className='ms-2'>Cart Items</span>
                                        </Button>
                                    </Card.Body>

                                    <Offcanvas show={show} onHide={handleClose}>
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Cart Details</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <div className="cart">
                                                <Cart cart={cart} products={products}></Cart>
                                            </div>
                                        </Offcanvas.Body>
                                    </Offcanvas>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
}


export default Shop;