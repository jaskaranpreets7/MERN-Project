import React ,{Component}from 'react';
import { connect } from 'react-redux'; 

import * as actionCreators from "../../Actions/Action";
import AddPerson from './Addperson/addperson';

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

    render(){
        return(
        <div>
            <AddPerson persons = {this.props.person}  />
         </div>     
    ); 
    }
};


function mapStatetoProps(state){
    return {
        person : state.getPerson
    };
};
 


export default connect(mapStatetoProps,actionCreators) (Person);
