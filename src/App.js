import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContactPage from './Components/ContactUs/ContactPage'
import TransferPage from './Components/Transfer'
import NotFoundPage from './Components/NotFoundPage'
import Home from './HomePage/Home'
import HistoryPage from './Components/History'
import CustomerComponent from './Components/Users';
import './App.css';
import HomeAppbar from './Components/HomeAppbar';
import Footer from './Components/Footer'
import Create from './Components/Create';

function App() {
  return (
    <>
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact  path='/view' component={CustomerComponent}></Route>
          <Route path='/transfer' component={TransferPage}></Route>
          <Route path='/contact' component={ContactPage} />
          <Route path='/history' component={HistoryPage} />
          <Route path='/create-user' component={Create} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
     <Footer/>
  </>
  );
}

export default App;

