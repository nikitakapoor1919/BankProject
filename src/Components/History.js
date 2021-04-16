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
import Appbar from './AppBar'
import moment from 'moment'
import Footer from './Footer';

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
      console.log("Data",doc.id);
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
    return (
    <div style={{margin:"0 auto"}} >
    <Appbar/>
    <TableContainer component={Paper} className={classes.table}>
      <Table className={classes.tableBox} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className={classes.showHeader} >SENDER</TableCell>
            <TableCell className={classes.hideHeader} >RECIEVER</TableCell>
            <TableCell className={classes.showHeader} >AMOUNT(₹)</TableCell>
            <TableCell className={classes.showHeader} >TIME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.users.map((board,id) => (
            <TableRow key={id}>
              <TableCell >{board.Sender}</TableCell>
              <TableCell >{board.Reciever}</TableCell>
              <TableCell >{board.Amount}₹</TableCell>
              <TableCell>{moment(Number(board.timestamp)).format('h:mm A ll')} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Footer/> */}
    </div>
    );
  }
}

export default withStyles(styles) (History);