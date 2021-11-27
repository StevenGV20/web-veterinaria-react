import React from 'react'
import { Link } from 'react-router-dom'
import { rutasMyAccount } from '../../../routes/routesMyAccount'
export default function Summary() {
  return (
    <div className="account-summary">
      {
        rutasMyAccount.map(ruta => (
          <>
            {ruta.view && (
              <div className="account-summary-item">
              <Link to={ruta.url}><b>{ruta.name}</b></Link>
              <p>{ruta.description}</p>
            </div>
            )}
          </>
        ))
      }
    </div>
  )
}
