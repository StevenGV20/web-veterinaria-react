import React from 'react';
import './_.css';
import SearchBar from '../widgets/searchBar';
import NavBar from '../widgets/navbar';

export default function Header(props) {
  return (
    <header>
      <SearchBar />
      <NavBar/>
    </header>
  )
}
