import React from 'react';
import { Link } from 'react-router-dom';
import './_.css';

export default function SearchBarResults({links,onClose}) {
  return (
    <div className="search-results-container">
      <table className="search-results-table">
        <thead className="search-results-title">
          <tr>
            <td>({links.length}) results</td>
          </tr>
        </thead>
        <tbody>
          {
            links.map(link => (
              <tr key={link.idproducto}>
                <td className="search-results-links"><Link to={`/product/${link.idproducto}`} onClick={onClose}>{link.nombre}</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
