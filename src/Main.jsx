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
        <div className="bg-gray-100 mt-20 p-4 flex-grow">
          <Switch location={this.props.location}>
            {routes.routes.map((route) => 
              <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
            )}
          </Switch>
        </div>
        <div  className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
                <a title="Follow me on twitter" href="https://www.twitter.com" target="_blank"  className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12" rel="noreferrer">
                    <img  className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" alt="Not Found"/>
                </a>
            </div>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Main;
