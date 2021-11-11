//public
export const routes_public = [
  {
    name: 'Inicio',
    path: '/',
    exact: false
  },
  {
    name: 'Productos',
    path: '/product',
    exact: true
  },
  {
    name: "Servicios",
    path:"/services",
    exact: true
  },
  {
    name: "Detalle de Producto",
    path: "/product/:id",
    exact: false
  },{
    name: "Detalle de Servicio",
    path: "/service/:id",
    exact: false
  },
  {
    name: "Inicio de Sesion",
    path: "/login",
    exact: false
  },
  {
    name: "Registro",
    path: "/register",
    exact: false
  },
  {
    name: "Mi carrito",
    path: "/miCart",
    exact: false
  }
];