import React, { useState } from 'react'
import './_.css'
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  const [menuProducts, setMenuProducts] = useState(false);
  
  const [menuServices, setMenuServices] = useState(false);

  const linkProducts = [
    {id:101, nombre:"Perros",url:"/products"},
    {id:102, nombre:"Gatos",url:"/products"},
    {id:103, nombre:"Otros Animales",url:"/products"},
    {id:104, nombre:"Juguetes",url:"/products"},
    {id:105, nombre:"Accesorios",url:"/products"}
  ]

  const linkServices = [
    {id:201, nombre:"Baños",url:"/services"},
    {id:202, nombre:"Salud",url:"/services"},
    {id:203, nombre:"Fiestas",url:"/services"}
    
  ]

  return (
    <ul className="menu-container">
      <li className="menu-container-li" onMouseOver={() => setMenuProducts(true)} onMouseLeave={() => setMenuProducts(false)}>
        <NavLink to="/products">Productos</NavLink>
        { menuProducts ?
          (<ul className="menu-container-li-ul">
            { 
              linkProducts.map((p) => 
                <li className="menu-container-li-ul-li" key={p.id}><NavLink to={p.url}>{p.nombre}</NavLink></li>
              )
            }
          </ul>)
        : ""}
      </li>
      <li className="menu-container-li" onMouseOver={() => setMenuServices(true)} onMouseLeave={() => setMenuServices(false)}>
        <NavLink className="" to="/services">Servicios</NavLink>
        { menuServices ?
          (<ul className="menu-container-li-ul">
            { 
              linkServices.map((s) => 
                <li className="menu-container-li-ul-li" key={s.id}><NavLink to={s.url}>{s.nombre}</NavLink></li>
              )
            }
          </ul>)
        : ""}
      </li>
      <li><a className="menu-container-li" href="#">Catagory</a></li>
      <li><a className="menu-container-li" href="#">Collections</a></li>
      <li><a className="menu-container-li" href="#">Contact Us</a></li>
    </ul>
  )
}
