import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/contact.css'
import email from '../../svg/email.svg'
import AppBar from '../../Components/AppBar'

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

const ContactPage = (props) => {
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
    let response = await fetch("https://my-contact-page.herokuapp.com/contact", {
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
  const classNamees = useStyles();
  return (
    <>
    <AppBar/>
    <div className={props.darkMode?"container-dark":"container"}>
    <div style={{textAlign: "center"}}>
    <p className="para">LEAVE US A MESSAGE</p>
    </div>
    <div className="myrow">
        <div className="column">
        <img src={email} className="my-img"/>
        </div>
        <div className="column">
        <form onSubmit={handleSubmit} >
            <label for="name" class={props.darkMode ? "required-field-dark ":"required-field"}>Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name..." required/>
            <label for="email" class={props.darkMode ? " required-field-dark":"required-field"}>Email</label>
            <input type="text" id="email" name="lastname" placeholder="Your Email..." required/>
            <label for="message" class={props.darkMode ? "required-field-dark":"required-field"}>Comment</label>
            <textarea  name="message" id="message"  placeholder="Write Something..." style={{height:170}} required></textarea>
            <Button
            variant="contained"
            style={{backgroundColor:"#146EB4",borderRadius:10,color:"White",marginBottom:"40px"}}
            endIcon={<SendIcon/>}
            fullWidth
            type="submit"
            >
            Send
            </Button>
        </form>
        </div>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default ContactPage;