import React,{useState,useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Footer from '../Components/Footer'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/IconButton';
import HomeAppbar from '../Components/HomeAppbar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://raw.githubusercontent.com/nikitakapoor1919/Images/main/bank-image1.jpg)',
    backgroundRepeat: 'no-repeat',
    // filter: "brightness(70%)" ,
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor:"rgb(246 246 246)"}}>
            <HomeAppbar/>
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
            <Link color="inherit" href="/create-user" >
            Create User
            </Link>
            <Link color="inherit" href="/view" >
            Customers
            </Link>
            <Link color="inherit" href="/transfer" >
            Transfer
            </Link>
            <Link color="inherit" href="/contact" >
            Contact
            </Link>
            <Link color="inherit" href="/history" >
            History
            </Link>
            </Breadcrumbs>
            <div style={{display:"flex"}}>
            <Link to="/hj">
            <Button style={{color:"black"}}onClick={()=>window.open("https://github.com/nikitakapoor1919", '_blank')}>
              <GitHubIcon />
            </Button>
            </Link>
            <Button style={{color:"black"}} onClick={()=>window.open("https://twitter.com/nikitakapoor_19", '_blank')}>
            <TwitterIcon/>
            </Button>
            <Button style={{color:"black"}} onClick={()=>window.open("https://www.linkedin.com/in/nikita-kapoor-609813190/", '_blank')}>
              <LinkedInIcon/>
            </Button>
            </div>
            </div>
        </Grid>
        </Grid>
        {/* <Footer/> */}
        </>
  );
}