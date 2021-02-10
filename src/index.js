import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomePage/Home';
import CustomerComponent from './Components/Users';
import reportWebVitals from './reportWebVitals';
import ContactPage from './Components/ContactPage'
import TransferPage from './Components/Transfer'
import NotFoundPage from './Components/NotFoundPage'
import App from './HomePage/App'

const routing =(
  <Router>
    {/* style={{overflowX:"hidden",maxWidth:"100%"}} */}
    <div id="routing-container" >
      <Switch>
           <Route exact path='/' component={App}></Route>
          <Route path='/home' component={HomeComponent}></Route>
          <Route path='/view' component={CustomerComponent}></Route>
          <Route path='/transfer' component={TransferPage}></Route>
          <Route path='/contact' component={ContactPage} />
          <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
