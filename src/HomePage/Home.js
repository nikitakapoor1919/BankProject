import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import { withStyles }from '@material-ui/core/styles';
import styles from './styles';
import Footer from '../Components/Footer'
import ContactPage from '../Components/ContactPage'
import ImageGallery from '../Components/ImageGallery'
import Users from '../Components/Users'
import Transfer from '../Components/Transfer'
import Card from '@material-ui/core/Card';
import ImageSlider from "../Components/ImageSlider"

export class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar/>
                <div className={classes.imgdiv}>
                     <img  className={classes.image} src="https://cdn.getpenta.com/wp-content/uploads/2020/08/bank-transfer-payment-smartphone-app.jpg"></img>
                </div>
                <div className={classes.heading}>Transfer Money Anytime Anywhere</div>
                <Card style={{borderRadius: 12,background: "#ededed",boxShadow:  "33px 33px 66px #acacac,-33px -33px 66px #ffffff"}}>
                <div className={classes.table}>
                     <Transfer/>
                     <Users/>
                     <ImageSlider/>
                     <ContactPage/>
                </div>
                <Footer/>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles) (Home)
//htps://images.unsplash.com/photo-1444653389962-8149286c578a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1345&q=80