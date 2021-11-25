import React from 'react'

export default function ChangePassword() {
  return (
    <form className="form-container">
          <b className="address-book-title">Cambiar clave</b>
          <div className="form-group">
            <label>Clave actual</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Nueva clave</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Confirme su clave</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="address-book_buttons-container">
            <button className="form-button btn-red">Cancelar</button>
            <button className="form-button btn-blue">Registrarse</button>
          </div>
        </form>
  )
}
