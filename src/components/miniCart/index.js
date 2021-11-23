import React from 'react'
import { Link } from 'react-router-dom'
import './_.css'

export default function MiniCart({onClose}) {
  const products = [
    {id:1,name:"Brit Premium by Nature Adult",precio:135,can:3,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80"}
  ]
  return (
    <div className="mini-cart">
      <div className="mini-cart-container">
        <div className="mini-cart-container-products">
          <div className="mini-cart-container-title">
            <b className="text-lg font-medium text-gray-900">Shopping cart</b>
            <div className="ml-3 h-7 flex items-center">
              <button
                type="button"
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={onClose}
              >
                x
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul className="mini-cart-container-list">
                {products.map((product) => (
                  <li key={product.id} className="py-6 flex">
                    <div className="mini-cart-products-img-content">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="mini-cart-products-img"
                      />
                    </div>

                    <div className="mini-cart-products-detail-content">
                      <div>
                        <div className="mini-cart-products-detail">
                          <h3>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                          </h3>
                          <p className="ml-4">{product.precio}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.can}</p>

                        <div className="flex">
                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mini-cart-container-subtotal">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link
              to="/myCart"
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or{' '}
              <button
                type="button"
                className="text-indigo-600 font-medium hover:text-indigo-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
