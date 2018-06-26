import React ,{Component}from 'react';
import axios from 'axios';

import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';

import getPerson from '../../store/Action';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import SearchBar from '../Common/SearchBar/SearchBar';
import AddPerson from '../Addperson/addperson';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root : {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

// import  './Person.css'

class Person extends Component{
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor',this.props );
        this.state = {
            searchPerson : [],
            showperson: true
          }
    }

    //toggling the person
    togglePerson = () => {
        const doesShow = this.state.showperson
        this.setState({
        showperson:!doesShow
        })
    }

    // deleting the persons by clicking 
    deletePerson = (personIndex ) => {
        const person = [...this.state.person]
        person.splice(personIndex , 1);
        this.setState({
          person : person
        })
        
      }


    searchItem = (e) => {
        let term = e.target.value;
        this.setState({
            searchPerson :  this.state.person.filter(el => el.name.includes(term))
        })
        // this.searchPrint();
    } 
    
    searchPrint = () =>{
        if(this.state.searchPerson.length > 0){
            console.log(this.state.searchPerson)
        }
    }


    render(){
        // const { searchPerson } = this.state
        // const {classes} = this.props

        return(
        <div>
            {/* <AddPerson per={this.props.person} props={this.props}/> */}
            <AddPerson/>
         </div>     
    ); 
    }
};
//{/* <Button  type="submit" onClick={this.togglePerson}>Toggle</Button><br/> */}
//{/* <SearchBar handler={this.searchItem}/> */}
function mapStatetoProps(state){
    return {
        person : state.person
    };
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({getPerson: getPerson}, dispatch);
}

export default  connect(mapStatetoProps,matchDispatchToProps) (Person);