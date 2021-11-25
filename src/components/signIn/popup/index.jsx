import React from 'react'
import { Link } from 'react-router-dom'
import './_.css'
import { LoginIcon,LogoOutIcon } from '../../utils/icons-svg'

export default function MenuUserPopup({user}) {
  return (
    <div className="user-popup-container">
      <Link to="/my-account/summary" className="user-popup-link"><LoginIcon className="icon-size"/> <span>Mi cuenta</span></Link>
      <Link to="/logout" className="user-popup-link"><LogoOutIcon className="icon-size"/><span>Cerrar Sesion</span></Link>
    </div>
  )
}
