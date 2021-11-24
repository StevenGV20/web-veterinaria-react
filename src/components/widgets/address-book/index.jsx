import React from 'react'
import './_.css'

export default function AddressBook({title,onSave,onCancel}) {
  return (
        <form className="form-container">
          <b className="address-book-title">{title}</b>
          <div className="form-group">
            <label>Nombres</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Apellidos</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Dni</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Telefono</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Direccion</label>
            <input 
              id=""
              name=""
              value=""
              onChange=""
              type="text" 
              className="form-input"/>
          </div>
          <div className="form-group">
            <label>Email</label>
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
