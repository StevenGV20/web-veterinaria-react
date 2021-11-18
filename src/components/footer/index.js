import React from 'react'
import './_.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-links-social-container">
          <div className="footer-links-social-name"><i className="fa fa-facebook"></i> /facebook</div>
          <div className="footer-links-social-name"><i className="fa fa-twitter"></i> @platzifood</div>
          <div className="footer-links-social-name"><i className="fa fa-instagram"></i> @platzifood</div>
        </div>
        <ul className="footer-links-pages-container">
          <li>Soporte</li>
          <li>Acerca de nosotros</li>
          <li>Registro</li>
          <li>Aviso Privacidad</li>
        </ul>
      </div>
    </footer>
  )
}
