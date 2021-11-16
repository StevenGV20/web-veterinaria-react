import React from 'react'
import './_.css'

export default function MiniCart() {
  return (
    <div className="cart-container">
      <div className="product-container">
        <figure>
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80" className="product-img" alt=""/>
          <figcaption>Producto</figcaption>
        </figure>
      </div>
    </div>
  )
}
