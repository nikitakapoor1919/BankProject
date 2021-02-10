import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer'
import Appbar from './AppBar'

const useStyles = makeStyles({
  box:{
    marginTop:100,marginLeft:10,marginRight:10,
    '@media screen and (max-width: 1024px)': {
        width: '380px',
    },
  border:{
   borderRadius:20
  }
},
});

const ContactPage = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  const classes = useStyles();
  return (
      <div style={{background:'url(https://raw.githubusercontent.com/nikitakapoor1919/Images/main/background.jpg)',height:'100vh',}}>
      <Appbar/>
          <form onSubmit={handleSubmit} style={{margin:"0 auto",width:700,position:"realative",top:100}}>
      <Card style={{borderRadius: 12,background: "#ededed",boxShadow:  "33px 33px 66px #acacac,-33px -33px 66px #ffffff"}}>
      <CardContent>
        <Typography style={{textTransform:"uppercase",fontWeight: 'bold',fontSize:25,textAlign:"center"}} variant="h6" id="tableTitle" component="div">
          Send Us A Message
        </Typography>
        <Typography style={{margin:20}}>
         <TextField  label="Full Name" variant="outlined" fullWidth type="text" id="name" />
        </Typography>
        <Typography style={{margin:20}}>
         <TextField  label="Email" variant="outlined"  fullWidth type="email" id="email"/>
        </Typography >
        <Typography style={{margin:20}}>
          <TextField 
            id="message" 
            fullWidth
            label="Message" 
            variant="outlined"
            multiline
            rows={4}
            // rowsMax={7} 
          />
        </Typography>
      </CardContent>
      <CardActions>
      <Typography style={{margin:"0 auto"}}>
        <Button
          variant="contained"
          color="primary"
          style={{width:200,borderRadius:20}}
          endIcon={<SendIcon/>}
          type="submit"
        >
          Send
        </Button>
        </Typography >
      </CardActions>
    </Card>
      {/* <button type="submit">{status}</button> */}
    </form>
    <Footer/>
      </div>
  );
};

export default ContactPage;