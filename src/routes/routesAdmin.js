//public
import HomeAdministration from "../pages/administration";
import CrudPersonalPage from "../pages/administration/crudPersonal";
import CrudProductosPage from "../pages/administration/crudProducts";
import CrudOrdersPage from "../pages/administration/crudOrderHistory";
import CrudCustomersPage from "../pages/administration/crudCustomers";
import CrudPetsPage from "../pages/administration/crudPets";
import PetsIcon from "@mui/icons-material/Pets";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import FormProduct from "../components/administration/crudProducts/form-product";

const routesAdmin = [
  {
    name: "Administration",
    path: "/administration/home",
    exact: true,
    component: HomeAdministration,
    icon: <HomeIcon />,
  },
  {
    name: "Personal",
    path: "/administration/personal",
    exact: true,
    component: CrudPersonalPage,
    icon: <GroupIcon />,
  },
  {
    name: "Customers",
    path: "/administration/customers",
    exact: true,
    component: CrudCustomersPage,
    icon: <PersonIcon />,
  },
  {
    name: "Products",
    path: "/administration/products",
    exact: true,
    component: CrudProductosPage,
    icon: <StorefrontIcon />,
  },
  {
    name: "Orders",
    path: "/administration/orders",
    exact: true,
    component: CrudOrdersPage,
    icon: <ListAltIcon />,
  },
  {
    name: "Pets",
    path: "/administration/pets",
    exact: true,
    component: CrudPetsPage,
    icon: <PetsIcon />,
  },
  {
    name: "Edit Product",
    path: "/administration/products/:id",
    exact: false,
    component: FormProduct,
    icon: null,
  },
  {
    name: "New Product",
    path: "/administration/products/new",
    exact: false,
    component: FormProduct,
    icon: null,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { routesAdmin };
