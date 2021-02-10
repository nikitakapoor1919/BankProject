import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Footer from '../Components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://raw.githubusercontent.com/nikitakapoor1919/Images/main/bank.jpg)',
    backgroundRepeat: 'no-repeat',
    filter: "brightness(70%)" ,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading:{
    textAlign: "center",
    margin: 50,
    fontSize: 40,
    fontFamily: "monospace"
    },
    heading2:{
        textAlign: "center",
        margin: 30,
        fontSize: 20,
        fontFamily: "monospace"
    }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
        <>
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Typography variant="h4" component="h2" className={classes.heading}>
            Ready To Transfer Money
            </Typography>
            <Typography variant="h1" component="h2" className={classes.heading2}>
            Simpler. Faster. Friendlier
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
                Home
            </Link>
            <Link color="inherit" href="/view" >
                View Customers
            </Link>
            <Link color="inherit" href="/transfer" >
               Transfer
            </Link>
            <Link color="inherit" href="/contact" >
            Contact Us
            </Link>
            </Breadcrumbs>
            </div>
        </Grid>
        </Grid>
        <Footer/>
        </>
  );
}