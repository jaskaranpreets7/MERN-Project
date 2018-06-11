import React , {Component} from 'react';

import axios from 'axios';

import {Link} from "react-router-dom";
import { connect } from 'react-redux';

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

import './addperson.css';

class AddPerson extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: [{
        name : String,
        email :String, 
        username : String,
        age :  Number,
        id:Number
      }],
      open: false,
    }
    console.log('in addperson ' , this.props.per)
  }

  // deleting the persons by clicking 
    deletePerson = (personIndex ) => {
        const person = [...this.state.person]
        person.splice(personIndex , 1);
        this.setState({
          person : person
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

// clickPerson = (id) => {
//   console.log(id)
//   console.log('click' ,this.props)
//     this.props.props.history.push({
//         pathname : '/person/:'+ id
//     })
    
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
    axios.get('http://localhost:7777/person')
    .then(res => {
      let person = res.data;
      // console.log('res' , res)
      // console.log('res.data' , res.data.data)
      this.setState({ person : person.data });
    })
   
  }

  //adding person 
  addPerson = () => {
      let doc = {
              name:this.state.name,
              email: this.state.email,
              username: this.state.username,
              age: this.state.age
        }

        let tempFields = this.props.per;

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
        <Button onClick={this.handleOpen} color='primary'>Add Person</Button>
        <Modal open={this.state.open}>
          <div className='Modal Modal-form'>
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
        </Modal><br/>
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
                    {this.state.person.map((persons , id) => {
                        return (
                                <TableRow key={persons.id}>
                                    <TableCell component="th" scope="row">{persons.name}</TableCell>
                                    <TableCell component="th" scope="row">{persons.email}</TableCell>
                                    <TableCell component="th" scope="row">{persons.age}</TableCell>
                                    <TableCell component="th" scope="row">{persons.username}</TableCell>
                                    <TableCell component="th" scope="row"><Button color="secondary" onClick={()=>{this.deletePerson(id)}}><Icon>delete</Icon></Button></TableCell>
                                </TableRow>
                            )
                            })}
                </TableBody>
                </Table>
            </Paper>
      </div>
    )
  }
}
// const mapStatetoProps = state => {
//     return {
//         per : state.person
//     };
// };

// const mapDispatchtoProps = dispatch => {
//     return {
//         person : () => dispatch({type : 'GET_PERSON'})
//     }
// }

export default AddPerson;
