import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AddresBookIcon, EditIcon, HomeIcon, ListIcon, MenuIcon } from '../utils/icons-svg'
import AddressBook from '../widgets/address-book'
import './_.css'

export default function MyAccount() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rutas = [
    {url:"/my-account",name:"Resumen",icon: <HomeIcon />,classIcon:"h-4 w-4 mt-1 mr-1",description:""},
    {url:"/my-account/personal-information",name:"Peronal Information",icon: <AddresBookIcon />,classIcon:"icon-size",description:"Edite su informacion personal, como su nombre, apellido, correo, telefono entre otros"},
    {url:"/my-account/change-password",name:"Change Password",icon: <EditIcon />,classIcon:"icon-size",description:"Aqui puedes cambiar tu clave"},
    {url:"/my-account/",name:"Order History",icon: <ListIcon />,classIcon:"icon-size",description:"Aqui puedes ver la lista de ordenes"},
    {url:"/my-account/",name:"Mis mascotas",icon: <ListIcon />,classIcon:"icon-size",description:"Aqui puedes ver tus mascotas registradas"},
  ]


  const MenuList = ({sm = false}) => (
    <ul className={`${sm ? 'account-menu-list-sm' : 'account-menu-list-lg'}`}>
      {
        rutas.map(ruta => (
          <li key={ruta.url}>
            <NavLink to={ruta.url} className="account-menu-list-link" activeClassName="account-menu-list-link active">
              <div className="h-4 w-4 mt-1 mr-1">{ruta.icon}</div>{ruta.name}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )

  const Summary = () => (
    <div className="account-summary">
      {
        rutas.map(ruta => (
          <div className="account-summary-item">
            <Link to={ruta.url}><b>{ruta.name}</b></Link>
            <p>{ruta.description}</p>
          </div>
        ))
      }
    </div>
  )
  return (
    <div className="account-container">
      <aside className="account-menu">
        <span className="account-menu-title" onClick={() => setIsMenuOpen(!isMenuOpen)}><MenuIcon className="h-4 w-4 mt-1 mr-1 md:hidden"/> Mi Cuenta</span>
        <MenuList/>
        {
          isMenuOpen ? <MenuList sm={true}/> : ""
        }
      </aside>
      <main className="account-children">
        <Summary />
      </main>
    </div>
  )
}
