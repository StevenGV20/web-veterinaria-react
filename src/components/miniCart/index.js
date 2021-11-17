import React from 'react'
import { Link } from 'react-router-dom'
import './_.css'

export default function MiniCart() {
  const listCart = [
    {id:1,name:"Brit Premium by Nature Adult",precio:135,can:3,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80"}
  ]
  return (
    <div className="cart-container">
      <table className="product-container">
        <thead>
          <tr>
            <th colSpan="2">Detalle</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listCart.map(p => (
            <tr>
            <td>
              <img src={p.img} className="product-img" alt=""/>
            </td>
            <td className="product-detail">
              {p.name} <br/>
              Precio: S/. {p.precio}<br/>
              Cantidad: {p.can}<br/>
            </td>
            <td className="product-price">
              S/. {p.precio * p.can}
            </td>
            <td>x</td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-container-buttons">
        <button className="btn btn-red">Vaciar Carrito</button>
        <Link to="/checkout" className="btn btn-blue">Ver Carrito</Link>
      </div>
    </div>
  )
}
