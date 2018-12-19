import React, {Component} from 'react';
import {Bootstrap , Button, Glyphicon, FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

import axios from 'axios';
import { connect } from 'react-redux';


import Person from  '../Person/Person'

import './Login.css'

class Login extends Component{
    constructor(props){
        super(props)
        // console.log("login component in LOGIN.JS" ,this.props)
        this.state = {
            email: '',
            password :'',
            person : '',

        }

    
    }

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    //   }
    

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
        document.getElementById('email').value = '';
        document.getElementById('pass').value = '';
    }



    //submit form
    handleSubmit = (event) => {
        // alert( 'Your information is login as : ' + this.state.email);
        // event.preventDefault();
        console.log("history:", this.props);

        this.props.history.push({
            pathname : "/person"
        })
    }

    render(){
        
        const {password} = this.state;
        const { eml } = this.props
        // console.log("login render in LOGIN.JS " , this.props)

        return(
       
            <div className="Login-form Login">
                <h2>Login Form</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup  bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        id="email"
                        onChange={this.handleEmail}
                    />
                    </FormGroup>
                    <FormGroup  bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        onChange={this.handlePass}
                        type="password"
                        id="pass"
                    />
                    </FormGroup>
                    <Button
                    block
                    bsSize="large"
                    type="submit"
                    onClick={this.changeName}
                    > Login </Button><br/>
                </form>
                <div><i>Create your account?</i> <a href=''>Sign Up</a></div>
            </div>
  
        )
    }
}

export default Login


