import React from 'react'
import './_.css'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="">
      <ul className="">
        <li className=""><NavLink to="/home" className="">Inicio</NavLink></li>
        <li className=""><NavLink to="/products" className="">Productos</NavLink></li>
        <li className=""><NavLink to="/services" className="">Servicios</NavLink></li>
        <li className=""><NavLink to="/" className="">Conocenos</NavLink></li>
      </ul>
    </div>
  )
}
