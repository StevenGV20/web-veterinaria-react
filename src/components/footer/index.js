import React from 'react'
import './_.css';

export default function Footer() {
  return (
    <footer class="footer-container">
      <div class="footer-links">
        <div class="footer-links-social-container">
          <div class="footer-links-social-name"><i class="fa fa-facebook"></i> /facebook</div>
          <div class="footer-links-social-name"><i class="fa fa-twitter"></i> @platzifood</div>
          <div class="footer-links-social-name"><i class="fa fa-instagram"></i> @platzifood</div>
        </div>
        <ul class="footer-links-pages-container">
          <li>Soporte</li>
          <li>Acerca de nosotros</li>
          <li>Registro</li>
          <li>Aviso Privacidad</li>
        </ul>
      </div>
    </footer>
  )
}
