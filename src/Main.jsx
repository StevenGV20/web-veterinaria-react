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
        <Header/>
        <Switch location={this.props.location}>
          {routes.routes.map((route) => 
            <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
          )}
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default Main;
