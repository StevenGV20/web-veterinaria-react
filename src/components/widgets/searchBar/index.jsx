import React from 'react';
import './_.css';
import { SearchIcon } from '../../utils/icons-svg';

export default function SearchBar() {
  return (
    <div className="search-container" >
      <input type="text" className="search-container-input" />
      <SearchIcon className="h-6 w-6 p-0 relative top-2"/>
    </div>
  )
}
