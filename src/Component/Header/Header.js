import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='headerContainer'>
            <div className="title">
                <img src='Logo.svg' alt='image'></img>
            </div>

            <div className="menu">  
                <a href='/order'>Order</a>
                <a href='/orderReview'>Order Review</a>
                <a href='/manageinventory'>Manage Inventory</a>
                <a href='/Login'>Login</a>
            </div>
        </nav>
    );
};

export default Header;