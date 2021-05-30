import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import '../../styles/notFound.css'

const NotFoundPage = () => (
    <Paper id="mainn" style={{padding:40,margin:"0 auto"}} >
    <div class="fof">
            <h1>Error 404</h1>
            <p>Maybe the page you are looking for has been removed, or you typed in the wrong URL</p>
             <div>
             <Link to="/" style={{textDecoration:"none",color:"gray"}}>
              Go Home
             </Link>
             </div>
    </div>
  </Paper>
);

export default NotFoundPage;