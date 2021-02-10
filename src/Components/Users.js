import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Footer from '../Components/Footer'
import Appbar from './AppBar'

class Users extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;
    this.state = {
      users: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { Id,FirstName,LastName,Address,PhoneNumber,Email,Balance} = doc.data();
      console.log("Data",doc.id);
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        Id,
        FirstName,
        LastName,
        Address,
        PhoneNumber,
        Email,
        Balance
      });
    });
    this.setState({
      users
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { classes } = this.props;
    return (
    <div style={{background:'url(https://raw.githubusercontent.com/nikitakapoor1919/Images/main/background.jpg)',height:'100vh',}} >
    <Appbar/>
    <TableContainer component={Paper} className={classes.box}  style={{margin:"0 auto",width:800,position:"relative",top:100,marginBottom:100}}>
      <Table className={classes.tableBox} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className={classes.showHeader} >FIRST NAME</TableCell>
            <TableCell className={classes.hideHeader} >LAST NAME</TableCell>
            <TableCell className={classes.hideHeader} >EMAIL</TableCell>
            <TableCell className={classes.showHeader} >BALANCE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.users.map((board) => (
            <TableRow key={board.Id}>
              <TableCell >{board.FirstName}</TableCell>
              <TableCell className={classes.hide}>{board.LastName}</TableCell>
              <TableCell className={classes.hide}>{board.Email}</TableCell>
              <TableCell >{board.Balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Footer/>
    </div>
    );
  }
}

export default withStyles(styles) (Users);