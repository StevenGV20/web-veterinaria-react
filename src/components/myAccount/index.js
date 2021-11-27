import React, { useState } from 'react'
import { NavLink,Route,Switch } from 'react-router-dom'
import { MenuIcon } from '../utils/icons-svg'
import './_.css'
import { rutasMyAccount } from '../../routes/routesMyAccount'
export default function MyAccount(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const MenuList = ({sm = false}) => (
    <ul className={`${sm ? 'account-menu-list-sm' : 'account-menu-list-lg'}`}>
      {
        rutasMyAccount.map(ruta => (
          <>
            {ruta.view && (
              <li key={ruta.url}>
                <NavLink to={ruta.url} className="account-menu-list-link" activeClassName="account-menu-list-link active">
                  <div className="h-4 w-4 mt-1 mr-1">{ruta.icon}</div>{ruta.name}
                </NavLink>
              </li>
            )}
          </>
        ))
      }
    </ul>
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
        {/* <Summary /> */}
        <Switch location={props.location}>
          {rutasMyAccount.map((route) => 
            <Route key={route.url} path={route.url} exact={true} component={route.component}/>
          )}
        </Switch>
      </main>
    </div>
  )
}
