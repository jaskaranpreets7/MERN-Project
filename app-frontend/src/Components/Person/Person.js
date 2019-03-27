import React , {Component} from 'react';
import { connect } from 'react-redux'; 

import { fetchPersons, searchPerson, deletePerson, addPerson } from '../../actions';
import AddPerson from './Addperson/addperson';
import SearchBar from '../Common/SearchBar/SearchBar';


import  './Person.css'

class Person extends Component{
    state = {
        open: false,
    }

    componentDidMount(){
        this.props.fetchPersons();
    }

    addPerson = (obj) => {
        this.props.addPerson(obj);
    }
    deletePerson = (personId) => {
        this.props.deletePerson(personId)
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
             open: false
        });
    }

    searchItem = (e) => {
        if(e){
            this.props.searchPerson(e)
        }else{
            this.props.fetchPersons();
        }
    }
     
    // onClick={this.deletePerson(person._id)}
    renderList = () => {
        return this.props.persons.map((person) => {
            return (
                    <tr key={person._id}>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>{person.age}</td>
                        <td>{person.username}</td>
                        {(person.name)? <td className="selectable negative" onClick={()=>this.deletePerson(person._id)}><center><i className="right trash icon"/></center></td> : null } 
                    </tr>
                    );
                })
    }
    render(){
        return(
            <div>
                <SearchBar searchHandler={this.searchItem}/>
                <br/>
                <button className="ui button" onClick={this.handleOpen}><i className="user icon"></i>Add Person</button>
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th><center>Name</center></th>
                                <th><center>Email</center></th>
                                <th><center>Age</center></th>
                                <th><center>Username</center></th>
                                <th><center>Delete</center></th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                    </table>
                <AddPerson addPerson={this.addPerson} open={this.state.open} close={this.handleClose} />
            </div>    
        ); 
    }
};


const mapStatetoProps = state => {
    return {
        persons : state.persons
    };
};
 


export default connect(mapStatetoProps, {fetchPersons,searchPerson , deletePerson, addPerson}) (Person);
