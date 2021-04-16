import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerComponent from './Components/Users';
import reportWebVitals from './reportWebVitals';
import ContactPage from './Components/ContactUs/ContactPage'
import TransferPage from './Components/Transfer'
import NotFoundPage from './Components/NotFoundPage'
import App from './App'
import HistoryPage from './Components/History'

// const routing =(
//   <Router>
//     {/* style={{overflowX:"hidden",maxWidth:"100%"}} */}
//     <div id="routing-container" >
//       <Switch>
//            {/* <Route exact path='/' component={App}></Route> */}
//           <Route path='/view' component={CustomerComponent}></Route>
//           <Route path='/transfer' component={TransferPage}></Route>
//           <Route path='/contact' component={ContactPage} />
//           <Route path='/history' component={HistoryPage} />
//           <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </Router>
// )

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
