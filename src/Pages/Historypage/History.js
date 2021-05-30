import React, { Component } from 'react';
import firebase from '../../firebase';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';
import Appbar from '../../Components/AppBar'
import moment from 'moment'
import { Divider, Typography } from '@material-ui/core';

class History extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('history');
    this.unsubscribe = null;
    this.state = {
      users: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { Sender,Reciever,Amount,timestamp} = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        Sender,
        Reciever,
        Amount,
        timestamp
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
    const sortedUsers=this.state.users.sort((a,b)=>b.timestamp - a.timestamp);
    return (
    <div className={classes.container} >
    <Appbar/>
    <Typography className={classes.para}>Transaction History</Typography>
    <Divider/>
    <table>
      <thead>
        <tr>
          <th>SENDER</th>
          <th>RECIEVER</th>
          <th>AMOUNT(₹)</th>
          <th>TIME</th>
        </tr>
      </thead>
      <tbody>
       {sortedUsers.map((board,id) =>(
        <tr>
          <td data-column="FIRST NAME">{board.Sender}</td>
          <td data-column="LAST NAME">{board.Reciever}</td>
          <td data-column="EMAIL">{board.Amount}₹</td>
          <td data-column="BALANCE(₹)">{moment(Number(board.timestamp)).format('h:mm A ll')}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
  }
}

export default withStyles(styles) (History);