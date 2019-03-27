import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';
import { fetchPersons } from '../../actions';

class Dashboard extends Component {

  componentDidMount(){
    this.props.fetchPersons();
  }

  renderList = () => {
    return this.props.persons.map((person) => {
      return (
        <a className="red card card-size" key={person._id}>
          <div className="content">
            <h5 className="header">{person.name}</h5>
            <div className="meta">
              <span>{person.age}</span>
            </div>
            <div className="description">
              <span>{person.email}</span>
            </div>
          </div> 
        </a>
       
      )
    })
  }

  render(){

    return (
        <div className="ui cards card-padding">
            {this.renderList()}
        </div>
    )
  }
}
const mapStatetoProps = state => {
  return {
      persons : state.persons
  };
};

export default connect(mapStatetoProps, {fetchPersons}) (Dashboard);

