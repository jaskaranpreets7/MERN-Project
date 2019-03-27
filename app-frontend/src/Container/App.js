import React, { Component } from 'react';
import {BrowserRouter as Router , NavLink , Route, Switch, Redirect,withRouter} from 'react-router-dom';

import Person from '../components/Person/Person';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


import logo from '../Assets/logo.svg';
import './App.css';
import Home from '../components/Home/Home';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

// const AsyncPerson = asyncComponent(() => {
//   return import('../Components/Person/Person')
// });

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth: true,
    }
  }

  render() {
    const { classes } = this.props;

    return (
    <Router>
      <div className="ui container">
       <div> 
         <AppBar color='primary' position='sticky'>
          <Toolbar>
            <Typography className={classes.flex}>
              <img src={logo} className="App-logo" alt="logo" />
              <NavLink to="/home"activeClassName="selected" activeStyle={{color : "black"}}><Button variant='flat'>Home</Button></NavLink>
              <NavLink to="/person" activeClassName='selected' activeStyle={{color : 'black'}}><Button  variant='flat'>Person</Button></NavLink>
              <NavLink to="/dashboard" activeClassName='selected' activeStyle={{color : 'black'}}><Button variant='flat'>Dashboard</Button></NavLink>
            </Typography> 
            {/* <NavLink to="/login"><Button variant='flat'>Login</Button></NavLink> */}
          </Toolbar>
        </AppBar>
        </div><br/>
        <Switch>
          {/* {this.state.auth ?<Route path="/Login" component={Login} /> : null} */}
          <Route path="/" exact component={Login} />
          <Route path="/person" component={Person}/>
          <Route path="/home" component={Home}  />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/dashboard" component={Dashboard}/>
          <Route render={()=> <h1 className='App-intro'>Page Not Found</h1>}/>
          {/* <Redirect from="/" to="/Welcome" /> */}
        </Switch>
        
      </div>
    </Router>
    );
    
  }
}



export default withStyles(styles) (App);
