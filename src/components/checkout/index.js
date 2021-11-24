import React from 'react'
import { Link } from 'react-router-dom'
import './_.css'

export default function Checkout() {
  const products = [
    {id:1,name:"Brit Premium by Nature Adult",precio:135,can:3,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80"},
    {id:2,name:"Brit Premium by Nature Adult",precio:135,can:3,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80"},
    {id:3,name:"Brit Premium by Nature Adult",precio:135,can:3,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80"},
    {id:4,name:"Brit Premium by Nature Adult",precio:135,can:3,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80"}
  ]
  return (
    <div className="checkout-container">
      <div className="checkout-container-list">
        <div className="checkout-container-title">
          Shopping cart
        </div>
        <div className="flow-root">
          <ul className="mini-cart-container-list">
            {products.map((product) => (
              <li key={product.id} className="py-6 flex">
                <div className="mini-cart-products-img-content">
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="mini-cart-products-img"
                  />
                </div>

                <div className="mini-cart-products-detail-content">
                  <div>
                    <div className="mini-cart-products-detail">
                      <h3>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="ml-4">S/. {product.precio}</p>
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
      <div className="checkout-container-summary">
        <span>Summary</span>
        <div className="checkout-container-subtotal">
          <div>
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <div>
            <p>IGV</p>
            <p>$262.00</p>
          </div>
          <div>
            <p>Descuento</p>
            <p>$262.00</p>
          </div>
          <div className="border-t border-black">
            <b>Total</b>
            <b className="w-full text-right">$262.00</b>
          </div>
        </div>
        <div className="checkout-container-payment">
          <Link
            to="/payment"
            className="form-button btn-indigo"
          >
            Continue to payment
          </Link>
          <p>
            or{' '}
            <Link
              type="button"
              className="text-indigo-600 font-medium hover:text-indigo-500"
              to="/products"
            >
              Continue Shopping<span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
