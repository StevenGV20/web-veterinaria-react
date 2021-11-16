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

  const openNavProducts = () => setMenuProducts(!menuProducts);
  const openNavServices = () => setMenuServices(!menuServices);
  
  const windowWidth = window.innerWidth;

  return (
    <ul className="menu-container">
      <li className="menu-container-li" onMouseLeave={() => setMenuProducts(false)}>
        <NavLink to="#"  onMouseOver={openNavProducts} onClick={openNavProducts} >Productos</NavLink>
        {
          windowWidth > 1024 ? (
            menuProducts ?
          (<ul className="menu-container-li-ul">
            { 
              linkProducts.map((p) => 
                <li className="menu-container-li-ul-li" key={p.id}><NavLink to={p.url}>{p.nombre}</NavLink></li>
              )
            }
          </ul>)
        : ""
          ) : <ul className="menu-container-li-ul">
            { 
              linkProducts.map((p) => 
                <li className="menu-container-li-ul-li" key={p.id}><NavLink to={p.url}>{p.nombre}</NavLink></li>
              )
            }
          </ul>
        }

      </li>
      <li className="menu-container-li" onMouseLeave={() => setMenuServices(!menuServices)}>
        <NavLink className="" to="/services"  onMouseOver={openNavServices} onClick={openNavServices}>Servicios</NavLink>
        {
          windowWidth > 1024 ? 
          (menuServices ?
            (<ul className="menu-container-li-ul">
              { 
                linkServices.map((s) => 
                  <li className="menu-container-li-ul-li" key={s.id}><NavLink to={s.url}>{s.nombre}</NavLink></li>
                )
              }
            </ul>)
            : ""
          ) 
          :
          <ul className="menu-container-li-ul">
              { 
                linkServices.map((s) => 
                  <li className="menu-container-li-ul-li" key={s.id}><NavLink to={s.url}>{s.nombre}</NavLink></li>
                )
              }
            </ul>
        }
      </li>
      {/* <li><Link className="menu-container-li" to="#">Catagory</Link></li>
      <li><Link className="menu-container-li" to="#">Collections</Link></li>
      <li><Link className="menu-container-li" to="#">Contact Us</Link></li> */}
    </ul>
  )
}
