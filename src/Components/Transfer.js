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
import moment from 'moment'

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users');
    this.state = {
      open:false,
      status:false,
      users:[],
      warning1:false,
      warning2:false,
      error:false,
      success:false,
      Amt:0,
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
      <div style={{position:"relative",top:75}}>
      {
        this.state.success? <Alert action={<IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => this.setState({success:false})}
          style={{width:'25%',marginTop:'-20px'}}
          >
          <CloseIcon fontSize="inherit" />
          </IconButton>} severity="success" 
        >
        Money Transferred Successfully !!
        </Alert>:""
      }
      {
        this.state.warning1? <Alert  action={<IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => this.setState({warning1:false})}
          style={{width:'25%',marginTop:'-20px'}}
          >
          <CloseIcon fontSize="inherit" />
          </IconButton>} severity="warning" 
        >
        Invaling Amount
        </Alert>:""
      }
      {
        this.state.warning2? <Alert  action={<IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => this.setState({warning2:false})}
          style={{width:'25%',marginTop:'-20px'}}
          >
          <CloseIcon fontSize="inherit" />
          </IconButton>} severity="warning" 
        >
         Account Not exist
        </Alert>:""
      }
      {
        this.state.error? <Alert  severity="error" action={<IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => this.setState({error:false})}
          style={{width:'25%',marginTop:'-20px'}}
          >
          <CloseIcon fontSize="inherit" />
          </IconButton>}
        >
        Your balance is unsufficient !!
        </Alert>:""
      }
      </div>
          {/* <Alert severity="error">Account Number Not Exist !!</Alert>
          <Alert severity="warning">Your balance is unsufficient !!</Alert> */}
      <div style={{margin:"0 auto",position:"relative",top:40,display: "flex",justifyContent: "center",alignItems: "center"}}>
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
    if(this.state.Amt==0||this.state.Amt<0)
    {
      this.setState({warning1:true})
      return
    }
    var doc = firebase.firestore().collection('users').doc(this.state.FriendAcc);
    doc.get().then(async (docData) => {
     if (docData.exists) {
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
      if(this.state.Amt > this.state.MyBal)
      {
        this.setState({error:true})
        return
      }
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
  
      await firebase.firestore().collection("history").add({
        Sender:this.state.MyAcc,
        Reciever:this.state.FriendAcc,
        Amount:this.state.Amt,
        timestamp:  moment().valueOf().toString()
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    } else {
      this.setState({warning2:true})
      return
    }
    this.setState({success:true})
    this.handleClose()
  }).catch((fail) => {
    console.error("Error adding document: ", fail);
  });

  }
  
}
