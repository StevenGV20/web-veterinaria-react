import React, { useState } from 'react';
import './_.css';
import { Link } from 'react-router-dom';
import SearchBar from '../widgets/searchBar';
import NavBar from '../widgets/navbar';

export default function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false) 
  return (
    <>   

      <div  className="header-container">
        <section  className="header-section">
          <nav  className="header-nav">
            <div  className="header-nav-lg">
              <Link  className="header-nav-logo-container" to="/home">
                <div className="text-3xl font-bold lg:w-1/2">
                  Logo Here.
                </div>
                <div className="hidden lg:flex lg:w-1/2">
                  <SearchBar />
                </div>
              </Link>
              <div className="navbar-container-lg">
                <NavBar />
              </div>
              <div  className="header-nav-third-part">
                <Link  className="hover:text-gray-200" to="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Link>
                <Link  className="flex items-center hover:text-gray-200" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  <span  className="flex absolute -mt-5 ml-4">
                    <span  className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                      <span  className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                      </span>
                    </span>
                </Link>
                <Link  className="flex items-center hover:text-gray-200" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
                
              </div>
            </div>
            <Link  className="xl:hidden flex mr-6 items-center" to="#">
              <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
                <span  className="">
                {/* <span  className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span> */}
                <p className="absoute inline-flex rounded-full h-4 w-4 bg-pink-500 top-1 right-0 p-2 text-sm">40
                </p>
              </span>
            </Link>
            <button  className="navbar-burger self-center xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
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
