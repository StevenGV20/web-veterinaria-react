import React, { useState } from 'react';
import './_.css';
import { Link } from 'react-router-dom';
import SearchBar from '../widgets/searchBar';
import NavBar from '../widgets/navbar';
import {CartIcon, MenuIcon} from '../utils/icons-svg'

export default function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false) 
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
                  <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Link>
                <button  className="flex items-center hover:text-gray-200">
                  <CartIcon numItems={numItems}/>
                </button>
                <Link  className="flex items-center hover:text-gray-200" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
              </div>
            </div>

            <button  className="mobile flex mr-6 items-center">
              <CartIcon numItems={numItems}/>
            </button>
            <button  className="mobile navbar-burger self-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon />
            </button>

          </nav>
          {isMenuOpen ? 
            <div className="navbar-container-sm">
              <NavBar />
            </div>
          : ""}
        </section>
      </div>
    </>
  )
}
