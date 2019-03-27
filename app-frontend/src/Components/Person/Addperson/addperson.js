import React , {Component} from 'react';

import Modal from '@material-ui/core/Modal';
import './addperson.css';

class AddPerson extends Component {
  constructor(props){
    super(props);

    this.state = {
      persons: [{
        name : String,
        email :String, 
        username : String,
        age :  Number,
      }],      
    }
  }
 

  handleClose = () => {
    this.props.close();
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  handleEmail = (event) =>{
    event.preventDefault();
    this.setState({
      email: event.target.value
    })
  }

  handleUsername = (event) => {
    event.preventDefault();
    this.setState({
      username: event.target.value
    })
  }

  handleAge = (event) => {
    event.preventDefault();
    this.setState({
      age: event.target.value
    })
  }

  
  //adding person 
  addPerson = () => {
    let doc = {
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        age: this.state.age
      }
      this.props.addPerson(doc);
    }

  render() { 
    return (
      <div>
        <Modal open={this.props.open}>
          <div className="Modal-form">
            <h3 class="ui center aligned icon header">
              <i class="circular users icon"></i>
            </h3>
            <form className="ui form">
              <div className="field">
                <label>Name</label>
                <input id="name" type="text" placeholder="Name" onChange={this.handleName}/>
              </div>
              <div className="field">
                <label>Email</label>
                <input id="name" type="email" placeholder="Email" onChange={this.handleEmail}/>
              </div>
              <div className="field">
                <label>Age</label>
                <input id="age" type="text" placeholder="Age" onChange={this.handleAge}/>
              </div>
              <div className="field">
                <label>Username</label>
                <input id="username" type="text" placeholder="Username"  onChange={this.handleUsername}/>
              </div>
              <div className="ui segment" style={{textAlign: 'center'}}>
                <div className="ui large buttons" >
                  <button  className="ui button" aria-label="Close" onClick={this.handleClose}>
                      <center><i className="close icon"/></center>
                  </button>
                  <div className="or"></div>
                  <button className="ui button" aria-label="Add" onClick={this.addPerson}>
                      <i className="check icon"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  };
};

export default AddPerson;
