import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './loggedIn.css'

class LoggedIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            getValue : ''
        }
    }

    render(){
        const val = sessionStorage.getItem('email');
        console.log("logged in value after getting " + val)

        const { getValue } = this.state;
        // console.log("value from session storage " + getValue)
        return (
        <div className="log">
        <Button> You LoggedIn as a {val}</Button>

        </div>
    )}
  
}

export default LoggedIn;