//public
import Home from "../pages/home";
import Register from "../pages/register";
import SignInPage from "../pages/signIn";
import ProductList from "../pages/productList";
import ServiceList from "../pages/serviceList";
import ProductDetail from "../pages/productDetail";
import ServiceDetail from "../pages/serviceDetail";
import MyCart from "../pages/checkout/myCart";
import MyAccountPage from "../pages/my-account";
import HomeAdministration from "../pages/administration";

const routes = [
  {
    name: "Order Details",
    path: "/my-account/order-history/:id",
    exact: false,
    component: MyAccountPage,
  },
  {
    name: "Change Password",
    path: "/my-account/change-password",
    exact: true,
    component: MyAccountPage,
  },
  {
    name: "Order History",
    path: "/my-account/order-history",
    exact: true,
    component: MyAccountPage,
  },
  {
    name: "Personal Information",
    path: "/my-account/personal-information",
    exact: true,
    component: MyAccountPage,
  },
  {
    name: "Mi cuenta",
    path: "/my-account/summary",
    exact: true,
    component: MyAccountPage,
  },
  {
    name: "Registro",
    path: "/register",
    exact: false,
    component: Register,
  },
  {
    name: "Inicio de Sesion",
    path: "/login",
    exact: false,
    component: SignInPage,
  },
  {
    name: "Productos",
    path: "/products",
    exact: true,
    component: ProductList,
  },
  {
    name: "Servicios",
    path: "/services",
    exact: true,
    component: ServiceList,
  },
  {
    name: "Detalle de Producto",
    path: "/products/:id",
    exact: false,
    component: ProductDetail,
  },
  {
    name: "Detalle de Servicio",
    path: "/service/:id",
    exact: false,
    component: ServiceDetail,
  },
  {
    name: "Mi carrito",
    path: "/myCart",
    exact: false,
    component: MyCart,
  },
  {
    name: "Inicio",
    path: "/",
    exact: false,
    component: Home,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { routes };
