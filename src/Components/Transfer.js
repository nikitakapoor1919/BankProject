import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import firebase from '../firebase';
import { Component } from 'react';
import { ThreeSixty } from '@material-ui/icons';
import Users from './Users'
import Footer from '../Components/Footer'

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users');
    this.state = {
      open:false,
      status:false,
      users:[],
      warning:false,
      error:false,
      success:false,
      Amt:100,
      FriendAcc:"",
      Pin:"",
      MyAcc:"",
      FriendUid:"",
      MyBal:0,
      FriendsBal:0

    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { uid,Id,FirstName,LastName,Address,PhoneNumber,Email,Balance} = doc.data();
      console.log("myData"+doc.data())
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        Id,
        FirstName,
        LastName,
        Address,
        PhoneNumber,
        Email,
        Balance,
        uid
      });
    });
    this.setState({
      users
   });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render(){
    const {classes}=this.props
    const { onClose, selectedValue, open } = this.props;
    return (
      <div style={{background:'url(https://raw.githubusercontent.com/nikitakapoor1919/Images/main/background.jpg)',height:'100vh',}}>
      {
        this.state.success? <Alert onClose={() => {this.setState({success:false})}}
        >
        Money Transferred Successfully !!
        </Alert>:""
      }
          {/* <Alert severity="error">Account Number Not Exist !!</Alert>
          <Alert severity="warning">Your balance is unsufficient !!</Alert> */}
      <div style={{margin:"0 auto",position:"relative",top:70,display: "flex",justifyContent: "center",alignItems: "center"}}>
        <Button
            color="secondary"
            style={{width:250,margin:50}}
            endIcon={<SendIcon/>}
            variant="contained"
            onClick={this.handleClickOpen}
        >
            Transfer Money
        </Button>
      </div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" style={{textAlign:"center",textTransform:"uppercase"}}>Transfer Money</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Simpler. Faster. Friendlier.<br></br>
            </DialogContentText>
            <TextField
              required
              variant="filled"
              autoFocus
              margin="dense"
              id="name"
              label="Your Email"
              onChange={(e)=>this.userTyping('MyAcc',e)}
              fullWidth
            />
            <TextField
              required
              variant="filled"
              margin="dense"
              id="name"
              label="Friend Email"
              onChange={(e)=>this.userTyping('FriendAcc',e)}
              fullWidth
            />
            <TextField
              required
              variant="filled"
              margin="dense"
              id="name"
              label="Amount"
              onChange={(e)=>this.userTyping('Amt',e)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.transferMoney} color="primary">
              Transfer
            </Button>
          </DialogActions>
        </Dialog>
        <Users/>
        <Footer/>
      </div>
    );
  }
  handleClose = () => {
    this.setState({
        open:false
    })
  };
  handleClickOpen = () => {
    this.setState({
        open:true
    })
  };
  handleStatusFalse=()=>{
    this.setState({
      status:false
    })
  }
  handleStatusTrue=()=>{
    this.setState({
      status:true
    })
  }
  userTyping=(type,e)=>{
    console.log("Typing")
    switch(type){
        case 'MyAcc':
            this.setState({MyAcc:e.target.value})
            break
        case 'Amt':
          this.setState({Amt:e.target.value})
          break   
        case 'FriendAcc':
          this.setState({FriendAcc:e.target.value})
                break
        default:
            break
    }
}
  transferMoney=async ()=>{
    var docRef = firebase.firestore().collection("users").doc(this.state.MyAcc);
    await docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data().Balance);
            const bal=doc.data().Balance
            this.setState({MyBal:bal})
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    await firebase.firestore().collection("users").doc(this.state.MyAcc).update({
        Balance:+this.state.MyBal- +this.state.Amt
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    var docRef = firebase.firestore().collection("users").doc(this.state.FriendAcc);
    await docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data().Balance);
            const bal=doc.data().Balance
            this.setState({FriendBal:bal})
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    await firebase.firestore().collection("users").doc(this.state.FriendAcc).update({
        Balance:+this.state.FriendBal+ +this.state.Amt
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    this.setState({success:true})
    this.handleClose()
      // {this.state.users.map((board) => (
      //       <TableRow key={board.Id}>
      //         <TableCell component="th" scope="row">
      //           {board.Id}
      //         </TableCell>
      //         <TableCell >{board.FirstName}</TableCell>
      //         <TableCell className={classes.hide}>{board.LastName}</TableCell>
      //         <TableCell className={classes.hide}  >{board.PhoneNumber}</TableCell>
      //         <TableCell className={classes.hide} >{board.Address}</TableCell>
      //         <TableCell className={classes.hide}>{board.Email}</TableCell>
      //         <TableCell >{board.Balance}</TableCell>
      //       </TableRow>
      //     ))}
  }
  
}
