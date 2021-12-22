import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./_.css";
import NavLink from "react-router-dom/NavLink";
import routesAdmin from "../../../routes/routesAdmin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Dashboard({ dashboardShow, openDashboard, goToStore }) {
  const Menu = ({ onClick }) => (
    <>
      <h1 className="dashboard-title">Administration</h1>
      <ul className="dashboard-menu">
        {routesAdmin.routesAdmin.map((route) => (
          <li key={route.name}>
            {route.icon && (
              <NavLink
                className="dashboard-menu-option"
                activeClassName="dashboard-menu-option active"
                to={route.path}
                onClick={onClick}
                key={route.name}
              >
                {route.icon}
                <span>{route.name}</span>
              </NavLink>
            )}
          </li>
        ))}
        <li>
          <NavLink onClick={goToStore} to="/" className="text-center w-full">
            <ArrowBackIcon className="mr-4" />
            Ir a la tienda
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <Transition.Root show={dashboardShow} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={openDashboard}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-10"
                leaveTo="-translate-x-full"
              >
                <div
                  className={`dashboard-container ${dashboardShow && "open"}`}
                >
                  <Menu onClick={openDashboard} />
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="dashboard-container">
        <Menu />
      </div>
    </>
  );
}

export default Dashboard;
