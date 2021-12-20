import React from "react";
import "./_.css";

export default function EditProduct() {
  return (
    <div className="w-5/6 sm:11/12 md:w-full text-black">
      EditProduct
      <form className="form-container">
        <div className="form-du-group">
          <div className="form-group">
            <label className="form-title">Nombre</label>
            <input className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-title">Marca</label>
            <input className="form-input" />
          </div>
        </div>
        <div className="form-tri-group">
          <div className="form-group">
            <label className="form-title">Stock</label>
            <input className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-title">Precio</label>
            <input className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-title">Categoria</label>
            <select className="form-input">
              <option>[Seleccione]</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-title">Descripcion Simple</label>
          <textarea className="form-input"></textarea>
        </div>
        <div className="form-group">
          <label className="form-title">Descripcion HTML:</label>
          <textarea className="form-input"></textarea>
        </div>
        <div className="form-group">
          <label className="form-title">Foto:</label>
          <input className="form-input" type="file" />
        </div>
        <div className="form-container-buttons">
          <button className="btn btn-red form-button">Cancelar</button>
          <button className="btn btn-indigo form-button">Aceptar</button>
        </div>
      </form>
    </div>
  );
}
