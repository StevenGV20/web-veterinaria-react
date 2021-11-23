import React from 'react'
import { Link } from 'react-router-dom'
import './_.css'

export default function SignIn() {
  return (
    <div className="login-container">
      <div className="content">
        <b>Login</b>
        <form className="form-container">
          <div className="form-group">
            <label>Email o nombre de usuario:</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Clave:</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="password" 
              className="form-input"/>
          </div>
          <button className="form-button btn-indigo">Iniciar Sesion</button>
        </form>
        <div className="login-register-container">
          <label>No esta registrado?</label><br/>
          <Link to="/register" className="login-register-link">Hagalo aqui</Link>
        </div>
      </div>
    </div>
  )
}
