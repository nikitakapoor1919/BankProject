// import React from 'react';
// import { Link } from 'react-router-dom';

// const NotFoundPage = () => (
//   <div>
//     <h1>404 - Not Found!</h1>
//     <Link to="/">
//       Go Home
//     </Link>
//   </div>
// );

// export default NotFoundPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const NotFoundPage = () => (
    <div id="mainn" style={{padding:40}} >
    <div class="fof">
            <h1>Error 404</h1>
             <div>
             <Link to="/">
              Go Home
              </Link>
             </div>
    </div>
  </div>
);

export default NotFoundPage;