import React from 'react';
import './App.css';
import { Route,Router,Switch,Redirect,withRouter,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Header}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
