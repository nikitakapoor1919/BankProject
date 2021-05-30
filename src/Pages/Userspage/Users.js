import React, { Component } from 'react';
import firebase from '../../firebase';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import Appbar from '../../Components/AppBar'
import { Divider, Typography } from '@material-ui/core';

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
    <>
    <Appbar/>
    <div  className={classes.container}>
    <Typography className={classes.para}>Users List</Typography>
    <Divider/>
    <table>
      <thead>
        <tr>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>BALANCE(₹)</th>
        </tr>
      </thead>
      <tbody>
       {this.state.users.map((board) => (
        <tr>
          <td data-column="FIRST NAME">{board.FirstName}</td>
          <td data-column="LAST NAME">{board.LastName}</td>
          <td data-column="EMAIL">{board.Email}</td>
          <td data-column="BALANCE(₹)">{board.Balance}₹</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
    );
  }
}

export default withStyles(styles) (Users);