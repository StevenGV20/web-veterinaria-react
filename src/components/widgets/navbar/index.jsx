import React from 'react'
import './_.css'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="">
      <ul className="">
        <li className=""><NavLink to="/" className="">Inicio</NavLink></li>
        <li className=""><NavLink to="/" className="">Productos</NavLink></li>
        <li className=""><NavLink to="/" className="">Servicios</NavLink></li>
        <li className=""><NavLink to="/" className="">Conocenos</NavLink></li>
      </ul>
    </div>
  )
}
