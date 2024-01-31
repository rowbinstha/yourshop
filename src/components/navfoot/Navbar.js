import React from 'react';

export default function Navbar() {
  return (
    <>
    <header className="header" data-header>
        <div className="container">
            <h1><a href="#start" className="logo">YourRestro</a></h1>
            <nav className="navbar" data-navbar>
                <ul className="navbar-list">
                    <li className="nav-item">
                        <a href="#start" className="navbar-link" data-nav-link>Start</a>
                    </li>
                    <li className="nav-item">
                        <a href="#us" className="navbar-link" data-nav-link>Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#store" className="navbar-link" data-nav-link>Store</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="navbar-link" data-nav-link>Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a href="#signup" className="navbar-link" data-nav-link>Sign up</a>
                    </li>
                </ul>
            </nav>
            <div className="header-btn-group">
                <button className="car-btn add-car">
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
                <button className="btn btn-hover">Reservation</button>
                <button className="nav-toogle-btn" aria-label="Toogle Menu" data-menu-toggle-btn>
                    <span className="line top"></span>
                    <span className="line middle"></span>
                    <span className="line bottom"></span>
                </button>
            </div>
        </div>
    </header>
    </>
  )
}
