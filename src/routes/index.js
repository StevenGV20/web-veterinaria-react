//public
import Home from '../pages/home'
import Register from '../pages/register'
import SignInPage from '../pages/signIn'
import ProductList from '../pages/productList';
import ServiceList from '../pages/serviceList';
import ProductDetail from '../pages/productDetail';
import ServiceDetail from '../pages/serviceDetail';

const routes = [
  {
    name: "Registro",
    path: "/register",
    exact: false,
    component: Register
  },
  {
    name: "Inicio de Sesion",
    path: "/login",
    exact: false,
    component: SignInPage
  },
  {
    name: 'Productos',
    path: '/products',
    exact: true,
    component: ProductList
  },
  {
    name: "Servicios",
    path:"/services",
    exact: true,
    component: ServiceList
  },
  {
    name: "Detalle de Producto",
    path: "/product/:id",
    exact: false,
    component: ProductDetail
  },{
    name: "Detalle de Servicio",
    path: "/service/:id",
    exact: false,
    component: ServiceDetail
  },
  {
    name: "Mi carrito",
    path: "/miCart",
    exact: false
  },
  {
    name: 'Inicio',
    path: '/',
    exact: false,
    component: Home
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { routes };