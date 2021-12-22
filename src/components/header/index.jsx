import React, { useState } from "react";
import "./_.css";
import { Link } from "react-router-dom";
import SearchBar from "../widgets/searchBar";
import NavBar from "../widgets/navbar";
import MiniCart from "../miniCart";
import {
  CartIcon,
  HeartIcon,
  LoginIcon,
  MenuIcon,
  SearchIcon,
} from "../utils/icons-svg";
import MenuUserPopup from "../signIn/popup";

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuUserOpen, setIsMenuUserOpen] = useState(false);

  const [user, setUser] = useState({ id: 1, name: "Frederico" });
  const numItems = 4;

  const closeAllMenu = () => {
    setIsMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
    setIsMenuUserOpen(false);
  };

  return (
    <>
      <div className="header-container">
        <section className="header-section">
          <nav className="header-nav">
            <div className="header-nav-lg">
              <div className="header-nav-logo-container">
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
              <div className="header-nav-third-part">
                <Link className="hover:text-gray-200" to="#">
                  <HeartIcon className="header-mobile-icon" />
                </Link>
                <button
                  className="mini-cart-btn"
                  onClick={() => {
                    closeAllMenu();
                    setCartOpen(!isCartOpen);
                  }}
                >
                  <CartIcon
                    numItems={numItems}
                    className="header-mobile-icon"
                  />
                  {/* {isCartOpen ? 
                      <div className="mini-cart-popup-lg" onMouseLeave={() => setCartOpen(false)}>
                        <MiniCart onClose={() => setCartOpen(false)}/>
                      </div>
                  : ""} */}
                </button>
                {user !== null ? (
                  <button
                    className="flex items-center"
                    to="/login"
                    onClick={() => {
                      closeAllMenu();
                      setIsMenuUserOpen(!isMenuUserOpen);
                    }}
                  >
                    <LoginIcon className="header-mobile-icon" />
                    <span className="ml-2">{user.name}</span>
                  </button>
                ) : (
                  <Link className="flex items-center" to="/login">
                    <LoginIcon className="header-mobile-icon" />
                  </Link>
                )}
              </div>
            </div>
            <div className="header-mobile">
              <button
                onClick={() => {
                  closeAllMenu();
                  setSearchOpen(!isSearchOpen);
                }}
              >
                <SearchIcon className="header-mobile-icon" />
              </button>
              <button
                onClick={() => {
                  closeAllMenu();
                  setCartOpen(!isCartOpen);
                }}
              >
                <CartIcon numItems={numItems} className="header-mobile-icon" />
              </button>
              {user !== null ? (
                <button
                  className="flex items-center"
                  onClick={() => {
                    closeAllMenu();
                    setIsMenuUserOpen(!isMenuUserOpen);
                  }}
                >
                  <LoginIcon className="header-mobile-icon" />
                </button>
              ) : (
                <Link className="flex items-center" to="/login">
                  <LoginIcon className="header-mobile-icon" />
                </Link>
              )}
              <button
                className="header-mobile navbar-burger self-center"
                onClick={() => {
                  closeAllMenu();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <MenuIcon className="header-mobile-icon" />
              </button>
            </div>
          </nav>
          {isMenuOpen ? (
            <div className="navbar-container-sm">
              <NavBar />
            </div>
          ) : (
            ""
          )}
          {isCartOpen ? (
            <div
              className="mini-cart-popup"
              onMouseLeave={() => setCartOpen(false)}
            >
              <MiniCart onClose={() => setCartOpen(false)} />
            </div>
          ) : (
            ""
          )}
          {isSearchOpen ? (
            <div className="header-mobile-search-container">
              <SearchBar />
            </div>
          ) : (
            ""
          )}
          {isMenuUserOpen ? (
            <div className="mini-menu-user" onMouseLeave={() => closeAllMenu()}>
              <MenuUserPopup changeStore={props.changeStore} />
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
}
