import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Header from './components/header/'
import Footer from './components/footer';
import routes from './routes/';

class Main extends Component  {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <>
      <div class="min-h-screen flex flex-col text-center">
        <div class="bg-gray-200 h-20"><Header/></div>
        <div class="bg-gray-100 flex-grow">
          <Switch location={this.props.location}>
            {routes.routes.map((route) => 
              <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
            )}
          </Switch>
        </div>
        <div class="bg-gray-200 h-32">
          <Footer/>
        </div>
      </div>
      </>
    )
  }
}

export default Main;
