import React , {Component} from 'react';

import axios from 'axios';

import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as actionCreators from "../../Actions/Action";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';


import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SearchBar from '../../Common/SearchBar/SearchBar';


import './addperson.css';

class AddPerson extends Component {
  constructor(props){
    super(props);

    this.state = {
      ...props,
      persons: [{
        name : String,
        email :String, 
        username : String,
        age :  Number,
        id:'',
        category : ''
      }],
      open: false,
      searchPerson:[],
      
    }
  }
  // deleting the persons by clicking 
    deletePerson = (personIndex ) => {
        const person = [...this.props.persons]
        person.splice(personIndex , 1);
        this.setState({
          persons : person
        })
  }

  // deletePerson = (id) => {
  //   this.props.props.history.push('/person/:' + id)
  //   console.log('id ' , +  this.props.props.match.params.id)
  //   axios.delete(`http://localhost:7777/delete/:${this.props.props.match.params.id}`)
  //     .then(res => {
  //       console.log(res.data)
  //     });
  // }

  handleClose = () => {
    this.setState({ open: false });
    
  }

  handleOpen = () =>{
    this.setState({ open: true });
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail = (event) =>{
    this.setState({
      email: event.target.value
    })
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }

  componentDidMount(){
    // axios.get('http://localhost:7777/person')
    // .then(res => {
    //   let person = res.data;
      
    //   this.setState({ persons : person.data});
    // })
    // let person = this.props.props.getPerson()
    
  }

  searchItem = (e) => {
    let term = e.target.value;
    this.setState({
        searchPerson :  this.props.persons.filter(el => el.name.includes(term))
    })
    // this.searchPrint();
  }
  searchPrint = () =>{
    if(this.props.searchPerson.length > 0){
        console.log(this.props.searchPerson)
    }
  } 

  //adding person 
  addPerson = () => {
      let doc = {
              name:this.state.name,
              email: this.state.email,
              username: this.state.username,
              age: this.state.age
        }

        let tempFields = this.state.persons;

        axios.post('http://localhost:7777/addperson', doc)
            .then(response => {
                console.log( "after post" , response)
                tempFields.push({
                  name: response.data.doc.name,
                  email: response.data.doc.email,
                  username: response.data.doc.username,
                  age: response.data.doc.age
                });
                this.setState({person : tempFields})
            })
    }

  render() {
 
    return (
   <div>
        {/* <SearchBar handler={this.searchItem}/><br/> */}
        <Modal open={this.state.open}>
          <div className='Modal-form'>
            <Typography variant="title" id="modal-title">
              Add Person
            </Typography>
            <form>
              <br/>
            <TextField
              id="name"
              label="Name"
              type="text"
              autoComplete="current-name"
              margin="normal"
              onChange={this.handleName}
            /><br/>
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="current-email"
              margin="normal"
              onChange={this.handleEmail}
            /><br/>
            <TextField
              id="age"
              label="Age"
              type="number"
              autoComplete="current-age"
              margin="normal"
              onChange={this.handleAge}
          /><br/>
            <TextField
              id="username"
              label="Username"
              type="text"
              autoComplete="current-username"
              margin="normal"
              onChange={this.handleUsername}
            /> <br/>
            <div>
               <Tooltip  title='Close'>
                <Button onClick={this.handleClose}>
                  <Icon color='secondary'>clear</Icon>
                </Button>
              </Tooltip>
              <Tooltip title="Add">
                <Button color="primary" aria-label="Add" onClick={this.addPerson}>
                  <Icon>add_circle</Icon>
                </Button>
              </Tooltip>
            </div>
            </form>
          </div>
        </Modal>
        <br/>
        <Paper className='root person'>
                <Table className='table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Username</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                    { this.props.persons.map((person) => {
                        return (
                                <TableRow key={person.id}>
                                    <TableCell component="th" scope="row">{person.name}</TableCell>
                                    <TableCell component="th" scope="row">{person.email}</TableCell>
                                    <TableCell component="th" scope="row">{person.age}</TableCell>
                                    <TableCell component="th" scope="row">{person.username}</TableCell>
                                    <TableCell component="th" scope="row"><Button color="secondary" onClick={()=>{this.deletePerson()}}><Icon>delete</Icon></Button></TableCell>
                                </TableRow>
                            );
                            })};
                </TableBody>
                </Table>
            </Paper>
            <br/>
            <center><Button onClick={this.handleOpen}  variant="contained" color="primary">Add Person</Button></center>
      </div>
    );
  };
};

export default AddPerson;
