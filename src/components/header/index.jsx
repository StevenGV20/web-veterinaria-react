import React, { useState } from 'react';
import './_.css';
import { Link } from 'react-router-dom';
import SearchBar from '../widgets/searchBar';
import NavBar from '../widgets/navbar';
import MiniCart from '../miniCart';
import {CartIcon, HeartIcon, LoginIcon, MenuIcon} from '../utils/icons-svg'

export default function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false) 
  const [isCartOpen, setCartOpen] = useState(false);
  const numItems = 4;
  return (
    <>   

      <div  className="header-container">
        <section  className="header-section">
          <nav  className="header-nav">
            <div  className="header-nav-lg">
              <div  className="header-nav-logo-container">
                <Link className="text-3xl font-bold lg:w-1/2" to="/home">
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
                  <HeartIcon />
                </Link>
                <button  className="mini-cart-container" onClick={() => setCartOpen(true)} >
                  <CartIcon numItems={numItems}/>
                  {isCartOpen ? 
                      <div className="mini-cart-popup-lg" onMouseLeave={() => setCartOpen(false)}>
                        <MiniCart />
                      </div>
                  : ""}
                </button>
                <Link  className="flex items-center hover:text-gray-200" to="#">
                    <LoginIcon />
                </Link>
              </div>
            </div>

            <button  className="header-mobile" onClick={() => setCartOpen(!isCartOpen)}>
              <CartIcon numItems={numItems}/>
            </button>
            <Link  className="header-mobile" to="#">
                <LoginIcon />
            </Link>
            <button  className="header-mobile navbar-burger self-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon />
            </button>

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
        </section>
      </div>
    </>
  )
}
