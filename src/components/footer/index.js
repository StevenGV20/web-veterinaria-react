import React from 'react'

export default function Footer() {
  return (
    <footer class="text-white bg-gray-700 w-full">
      <div class="md:flex md:flex-row-reverse justify-around">
        <div class="ml-8">
          <div class="hover:text-primary"><i class="fa fa-facebook"></i> /facebook</div>
          <div class="hover:text-primary"><i class="fa fa-twitter"></i> @platzifood</div>
          <div class="hover:text-primary"><i class="fa fa-instagram"></i> @platzifood</div>
        </div>
        <ul class="mt-4 mb-4 ml-8 md:list-disc">
          <li>Soporte</li>
          <li>Acerca de nosotros</li>
          <li>Registro</li>
          <li>Aviso Privacidad</li>
        </ul>
      </div>
    </footer>
  )
}
