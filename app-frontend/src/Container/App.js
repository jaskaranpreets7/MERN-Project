import React, { Component } from 'react';
import {BrowserRouter as Router , NavLink , Route, Switch, Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Welcome from '../Components/Welcome/welcome';
import asyncComponent from '../hoc/asyncComponent';
import Person from '../Components/Person/Person';
import Login from '../Components/Login/Login';
import Dashboard from '../Components/Dashboard/Dashboard';
import Footer from '../Components/Common/Footer/Footer';
import AddPerson from '../Components/Person/Addperson/addperson';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



import logo from '../Assets/logo.svg';
import './App.css';
import Home from '../Components/Home/Home';

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
      <div className='App'>
       <div className={classes.root}> 
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
        </div>
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
        <Footer/>
      </div>
    </Router>
    );
    
  }
}



export default withStyles(styles) (App);
