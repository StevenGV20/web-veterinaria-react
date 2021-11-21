import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCard({product}) {
  return (
    <div className="text-gray-600 flex w-full" key={product.idproducto}>
            <Link className="p-2 w-full" to={`/product/${product.idproducto}`} key={product.idproducto}>
              <div className="flex flex-col items-center text-center bg-gray-800 rounded-lg">
                  <img alt="team"
                      className="flex-shrink-0 rounded-t-lg h-auto w-full object-cover object-center mb-4"
                      src={product.foto1}/>
                  <div className="w-full ">
                      <h2 className="title-font font-medium text-lg text-white">{product.nombre}</h2>
                      <h3 className="mb-3">{product.precio}</h3>
                  </div>
              </div>
          </Link>
      </div> 
  )
}
