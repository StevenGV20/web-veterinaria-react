import React, { useState } from 'react';
import './_.css';
import { Link } from 'react-router-dom';
import SearchBar from '../widgets/searchBar';
import NavBar from '../widgets/navbar';
import MiniCart from '../miniCart';
import {CartIcon, HeartIcon, LoginIcon, MenuIcon, SearchIcon} from '../utils/icons-svg';

export default function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false) 
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const numItems = 4;
  return (
    <>   
      <div  className="header-container">
        <section  className="header-section">
          <nav  className="header-nav">
            <div  className="header-nav-lg">
              <div  className="header-nav-logo-container">
                <Link className="header-nav-logo-title" to="/home">
                  Logo Here.
                </Link>
                <div className="hidden lg:flex lg:w-1/2">
                  <SearchBar />
                </div>
              </div>
              <div className="navbar-container-lg">
                <NavBar />
              </div>
              <div  className="header-nav-third-part">
                <Link  className="hover:text-gray-200" to="#">
                  <HeartIcon className="header-mobile-icon"/>
                </Link>
                <button  className="mini-cart-container" onClick={() => setCartOpen(true)} >
                  <CartIcon numItems={numItems} className="header-mobile-icon"/>
                  {isCartOpen ? 
                      <div className="mini-cart-popup-lg" onMouseLeave={() => setCartOpen(false)}>
                        <MiniCart />
                      </div>
                  : ""}
                </button>
                <Link  className="flex items-center hover:text-gray-200" to="#">
                    <LoginIcon className="header-mobile-icon"/>
                </Link>
              </div>
            </div>
            <div className="header-mobile" >
              <button onClick={() => setSearchOpen(!isSearchOpen)}>
                <SearchIcon className="header-mobile-icon"/>
              </button>
              <button onClick={() => setCartOpen(!isCartOpen)}>
                <CartIcon numItems={numItems} className="header-mobile-icon"/>
              </button>
              <Link to="#">
                  <LoginIcon className="header-mobile-icon"/>
              </Link>
              <button className="header-mobile navbar-burger self-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <MenuIcon className="header-mobile-icon"/>
              </button>
            </div>

          </nav>
          {isMenuOpen ? 
            <div className="navbar-container-sm">
              <NavBar />
            </div>
          : ""}
          {isCartOpen ? 
              <div className="mini-cart-popup">
                <MiniCart />
              </div>
          : ""}
          {isSearchOpen?
            <div className="header-mobile-search-container">
              <SearchBar />
            </div>
          :""}
        </section>
      </div>
    </>
  )
}
