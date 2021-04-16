import React,{useState,useEffect} from 'react'
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
    const getMode=()=>{
    const initialMode=localStorage.getItem("mode")
  if(initialMode==null){
    if(window.matchMedia("(prefers-color-scheme:dark)").matches){
      return true;
    }else{
      return false
    }
  }else{
      return JSON.parse(localStorage.getItem("mode"))
    }
  }
  const [dark,setMode]=useState(getMode())
  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])
  return (
   <div className={dark ?"dark-bg":"light-bg"} style={{background:'url(https://raw.githubusercontent.com/nikitakapoor1919/Images/main/background.jpg)'}}>
   <HomeAppbar darkMode={dark}/>
    <div className={dark ?"App-header-dark":"App-header"} >
       {/* <label className="switch">
          <input type="checkbox"
            checked={dark}
            onChange={()=>setMode(!dark)}
            >
            </input>
          <span className="slider round"></span>
        </label> */}
	 	
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
     <Footer darkMode={dark}/>
   </div>
  );
}

export default App;

