import React, { Component } from 'react';
import firebase from '../firebase';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from './AppBar';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      FirstName: '',
      Email: '',
      Balance: '',
      LastName:'',
      success:false
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { FirstName,LastName,Email, Balance } = this.state;
    this.ref.doc(Email).set({
      FirstName,
      LastName,
      Email,
      Balance
  })
    // this.ref.add({
    //   FirstName,
    //   LastName,
    //   Email,
    //   Balance
    // })
    .then((Email) => {
      this.setState({
        FirstName: '',
        Email: '',
        LastName:'',
        Balance: ''
      });
      // this.props.history.push("/")
      this.setState({success:true})
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { FirstName, Email, Balance,LastName } = this.state;
    return (
      <div  style={{margin:"0 auto"}}>
      <AppBar/>
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
       Customer Created Successfully !!
        </Alert>:""
      }
          <div >
            <h4>
                CREATE NEW CUSTOMER
            </h4>
          </div>
          <div >
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label className="required-field" for="FirstName">First Name:</label>
                <input type="text"  name="FirstName" value={FirstName} onChange={this.onChange} placeholder="First Name" required />
              </div>
              <div class="form-group">
                <label className="required-field" for="LastName">Last Name:</label>
                <input type="text"  name="LastName" value={LastName} onChange={this.onChange} placeholder="Last Name" required />
              </div>
              <div class="form-group">
                <label className="required-field" for="Email">Email:</label>
                <input type="text"  name="Email" value={Email} onChange={this.onChange} placeholder="Email" required/>
              </div>
              <div class="form-group">
                <label className="required-field" for="Balance">Balance:</label>
                <input type="text"  name="Balance" value={Balance} onChange={this.onChange} placeholder="Balance" required/>
              </div>
              <Button
              variant="contained"
              style={{backgroundColor:"#146EB4",borderRadius:10,color:"White"}}
              endIcon={<SendIcon/>}
              fullWidth
              type="submit"
              >
              Submit
              </Button>
            </form>
          </div>
        </div>
    );
  }
}

export default Create;