import React, { useState } from 'react';
import './_.css';
import { SearchIcon } from '../../utils/icons-svg';
import SearchBarResults from './results';
import axios from 'axios';

export default function SearchBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [valSearch,setValSearch] = useState('');
  const [results, setResults] = useState([]);

  const searchFilter = (e) => {
    const val = e.target.value;
    setValSearch(val);
    if(val.length > 0) {
      setSearchOpen(true);
      buscar(val);
    }
    else setSearchOpen(false);
  }

  async function buscar(nom){
    const response = await axios.get(`https://veterinaria-web-server-rest.herokuapp.com/producto/listaProductosByNombre/${nom}`)
    const data = response.data;
    setResults(data);
    console.log(data);
  }

  return (
    <div className="search-container" >
      <input type="text" className="search-container-input" value={valSearch} onChange={searchFilter} onClick={searchFilter}/>
      <SearchIcon className="h-6 w-6 p-0 relative top-2"/>
      {isSearchOpen ? 
        <div className="search-container-results">
          <SearchBarResults links={results} onClose={() => setSearchOpen(false)}/>
        </div>
      : ""}
    </div>
  )
}
