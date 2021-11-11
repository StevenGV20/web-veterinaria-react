import React, { Component } from 'react';
import { Route,Router,Switch,Redirect,withRouter,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

class Main extends Component  {

  constructor(name) {
    this.name=name;
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component=""/>
        </Switch>
      </BrowserRouter>
    )
  }
}
