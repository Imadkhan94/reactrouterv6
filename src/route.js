import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Productitem from './Components/Productitem';
import LinkBar from './Components/links';
function RouterConfig(){
  return (
    <div>
      <Router>
          <LinkBar/>
          <Switch>
               <Route exact path="/" component={Home}></Route>
               <Route path="/About" component={About}></Route>
               <Route path="/Product" component={Product}></Route>
               <Route path="/Productitem/:id" component={Productitem}></Route>
               <Route path="*" component={()=><h2>404 NOT FOUND</h2>}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;