import React from 'react';
import { Link } from 'react-router-dom';
import './_.css';

export default function SearchBarResults({links}) {
  return (
    <div className="search-results-container">
      <table>
        <thead>
          <th>
            <td>Search results</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td><Link to="#">Producto 1</Link></td>
          </tr>
          <tr>
            <td><Link to="#">Producto 2</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
