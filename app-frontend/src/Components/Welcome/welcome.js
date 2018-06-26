import React, { Component } from 'react';
import './Welcome.css';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
            email: '',
            password : ''
        }
    }

    handleClose = () => {
        this.setState({ open: false });
    }
    
    handleOpen = () =>{
        this.setState({ open: true });
    }

    //getting the value from the input
    handleEmail = (e)=>{
        let value = e.target.value
        this.setState({
            email:  value
        })
    }

    //getting the value from the pass input
    handlePass = (e) =>{
        let val = e.target.value
        this.setState({
            password: val
        })
    }

    //setting the name after getting the input value
    changeName = (newName,newPass) =>{
        this.setState({
            email : this.state.email,
            password: this.state.password
        })
    }

    //submit form
    handleSubmit = (event) => {
        alert( 'Your information is login as : ' + this.state.email);
        event.preventDefault();
        this.props.history.push({
            pathname : '/home'
        })
        // this.handleClose();
    }

    render(){
        return (
    <div> 
        <Modal open={this.state.open}>
          <div className='Login Login-form'>
            <Typography variant="title" id="modal-title">
             Login
            </Typography>
            <form >
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="current-email"
              margin="normal"
              onChange={this.handleEmail}
            /><br/>
            <TextField
            id="pass"
            label="Password"
            type="password"
            margin="normal"
            onChange={this.handlePass}
            />
            <div>
                <Button  color="secondary" onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button color="primary" aria-label="Add" onClick={this.handleSubmit}>Login
                </Button>
            </div>
            </form>
            <div><i>Create your account?</i> <a href=''>Sign Up</a></div>
          </div>
        </Modal>
    </div>
    )}
    
}

export default Welcome;