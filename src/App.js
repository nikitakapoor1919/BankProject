import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContactPage from './Pages/ContactUs/ContactPage'
import TransferPage from './Pages/Transferpage/Transfer'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import Home from './Pages/HomePage/Home'
import HistoryPage from './Pages/Historypage/History'
import CustomerComponent from './Pages/Userspage/Users';
import './styles/App.css';
import HomeAppbar from './Components/HomeAppbar';
import Footer from './Components/Footer'
import Create from './Pages/CreateUserPage/Create';

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

