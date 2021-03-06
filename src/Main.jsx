import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/";
import Footer from "./components/footer";
import routes from "./routes/";
import routesAdmin from "./routes/routesAdmin";
import Dashboard from "./components/administration/dashboard";
import NavBar from "./components/administration/dashboard/navbar";
/* import { connect } from "react-redux";
import { changeTypeStoreAction } from "./redux/actions/globalActions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    typeStore: state.typeStore,
  };
};

const mapDispatchToProps = (dispatch) => ({
  typeStore: (type) => dispatch(changeTypeStoreAction(type)),
}); */

function Main(props) {
  const [typeStore, setTypeStore] = useState("admin");
  const [dashboardShow, setDashboardShow] = useState(false);
  const openDashboard = () => {
    setDashboardShow(!dashboardShow);
  };
  const device = window.innerWidth;

  useEffect(() => {
    /* if (device < 700) {
      setDashboardShow(false);
    } */
    console.log(typeStore);
  }, [typeStore]);

  const changeStore = (type) => setTypeStore(type);

  return (
    <>
      {typeStore === "client" ? (
        <>
          <Header changeStore={changeStore} />
          <div className="bg-white mt-20 p-4 flex-grow">
            <Switch location={props.location}>
              {routes.routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
          <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Follow me on twitter"
                href="https://www.twitter.com"
                target="_blank"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                rel="noreferrer"
              >
                <img
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
                  alt="Not Found"
                />
              </a>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div
          className={`${openDashboard && "overflow-x-scroll"} flex flex-row`}
        >
          <Dashboard
            dashboardShow={dashboardShow}
            openDashboard={openDashboard}
            goToStore={changeStore}
          />
          <div className="bg-white flex-grow">
            <NavBar openDashboard={openDashboard} />
            <Switch location={props.location}>
              {routesAdmin.routesAdmin.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default Main;
