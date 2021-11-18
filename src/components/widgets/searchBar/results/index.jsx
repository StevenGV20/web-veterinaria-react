import React from 'react';
import { Link } from 'react-router-dom';
import './_.css';

export default function SearchBarResults({links}) {
  return (
    <div className="search-results-container">
      <table>
        <thead className="search-results-title">
          <tr>
            <td>Search results</td>
          </tr>
        </thead>
        <tbody>
          <tr key="1">
            <td><Link to="#">Producto 1</Link></td>
          </tr>
          <tr key="2">
            <td><Link to="#">Producto 2</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
