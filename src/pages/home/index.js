import React from 'react'

export default function Home() {
  return (
    <>
      <div class="h-56 md:h-100 md:bg-center bg-no-repeat bg-cover bg-bottom"></div>
    <div class="container mx-auto md:flex">
      <div class="mx-2 md:mx-0 mt-4 md:w-1/2 md:flex md:bg-white rounded-lg">
        <div>
          <img class="w-full md:w-48 md:h-full object-cover object-left rounded-lg md:rounded-r-none" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80" alt=""/>
        </div>
        <div class="relative mx-2 p-2 shadow-lg md:shadow-none bg-white md:bg-transparent rounded-lg -mt-2">
          <h2 class="text-xl tracking-tight font-semibold uppercase text-gray-900 md:text-lg">Hamburguesa con queso</h2>
          <p class="text-gray-700 leading-snug">Hamburguesa con queso y aderezo chipotle.</p>
          <div class="mt-2 text-sm font-semibold text-gray-700">PEN S/. 15.00</div>
          <div class="mt-2 text-xs text-yellow-700">&starf;&starf;&starf;&starf;&star; / comentarios</div>
        </div>
      </div>

      <div class="mx-2 md:mx-0 md:ml-2 mt-4 md:w-1/2 md:flex md:bg-white rounded-lg">
        <div>
          <img class="w-full md:w-48 md:h-full object-cover object-left rounded-lg md:rounded-r-none" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80" alt=""/>
        </div>
        <div class="relative mx-2 p-2 shadow-lg md:shadow-none bg-white md:bg-transparent rounded-lg -mt-2">
          <h2 class="text-xl tracking-tight font-semibold uppercase text-gray-900 md:text-lg">Hamburguesa con queso</h2>
          <p class="text-gray-700 leading-snug">Hamburguesa con queso y aderezo chipotle.</p>
          <div class="mt-2 text-sm font-semibold text-gray-700">PEN S/. 15.00</div>
          <div class="mt-2 text-xs text-yellow-700">&starf;&starf;&starf;&starf;&star; / comentarios</div>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-4">
      <div class="">
        <div class="">Nombre</div>
        <input type="text" class="form-control focus:outline-none" placeholder="Nombre"/>
      </div>
      <div class="">
        <div class="">Email</div>
        <input type="email" class="form-control" placeholder="Email"/>
      </div>
      <div class="">
        <div class="">Comentarios</div>
        <textarea cols="30" class="form-control"></textarea>
      </div>
      <div>
        <button class="btn btn-primary mx-auto">Enviar</button>
      </div>
    </div>
    </>
  )
}
