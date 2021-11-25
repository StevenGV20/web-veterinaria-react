import ChangePassword from "../components/myAccount/edit-password";
import Summary from "../components/myAccount/summary";
import { AddresBookIcon, EditIcon, HomeIcon, ListIcon } from "../components/utils/icons-svg";
import AddressBook from "../components/widgets/address-book";

export const rutasMyAccount = [
  {
    url:"/my-account/summary",
    name:"Resumen",icon: <HomeIcon />,
    classIcon:"h-4 w-4 mt-1 mr-1",
    description:"Elije una opcion para que edites tu informacion personal o veas todas tus ordenes",
    component:Summary
  },
  {
    url:"/my-account/personal-information",
    name:"Personal Information",
    icon: <AddresBookIcon />,
    classIcon:"icon-size",
    description:"Edite su informacion personal, como su nombre, apellido, correo, telefono entre otros",
    component: () => (<AddressBook title="Editar informacion personal"/>)
  },
  {
    url:"/my-account/change-password",
    name:"Change Password",
    icon: <EditIcon />,
    classIcon:"icon-size",
    description:"Aqui puedes cambiar tu clave",
    component: ChangePassword
  },
  {
    url:"/my-account/order-history",
    name:"Order History",
    icon: <ListIcon />,
    classIcon:"icon-size",
    description:"Aqui puedes ver la lista de ordenes",
    component: AddressBook
  },
  {
    url:"/my-account/mis-mascotas",
    name:"Mis mascotas",
    icon: <ListIcon />,
    classIcon:"icon-size",
    description:"Aqui puedes ver tus mascotas registradas",
    component: AddressBook
  },
]
