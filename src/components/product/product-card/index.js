import React from 'react'
import { Link } from 'react-router-dom';
import './_.css'

export default function ProductCard({product}) {
  return (
    <div className="product-card-container" key={product.idproducto}>
            <Link className="p-2 w-full" to={`/products/${product.idproducto}`} key={product.idproducto}>
              <div className="product-card-details">
                  <img alt="team"
                      className="product-card-img"
                      src={product.foto1}/>
                  <div className="w-full bg-gray-800 rounded-b-md">
                      <h2 className="title-font font-medium text-lg text-white">{product.nombre}</h2>
                      <h3 className="mb-3">{product.precio}</h3>
                  </div>
              </div>
          </Link>
      </div> 
  )
}
