import React, { useState } from 'react';
import './_.css';
import { SearchIcon } from '../../utils/icons-svg';
import SearchBarResults from './results';

export default function SearchBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [valSearch,setValSearch] = useState('');
  const searchFilter = (e) => {
    const val = e.target.value;
    setValSearch(val);
    if(val.length > 2) setSearchOpen(true);
    else setSearchOpen(false);
  }
  return (
    <div className="search-container" >
      <input type="text" className="search-container-input" value={valSearch} onChange={searchFilter}/>
      <SearchIcon className="h-6 w-6 p-0 relative top-2"/>
      {isSearchOpen ? 
        <div className="search-container-results">
          <SearchBarResults />
        </div>
      : ""}
    </div>
  )
}
