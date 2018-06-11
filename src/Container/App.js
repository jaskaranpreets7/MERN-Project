import React, { Component } from 'react';
import {BrowserRouter as Router , NavLink , Route, Switch, Redirect,withRouter} from 'react-router-dom'

import Welcome from '../Components/Welcome/welcome';
import asyncComponent from '../hoc/asyncComponent';
import Person from '../Components/Person/Person';
import Login from '../Components/Login/Login';
import Comp from '../Components/Comp/Comp';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import logo from '../Assets/logo.svg';
import './App.css';
import LoggedIn from '../Components/LoggedIn/LoggedIn';


// const AsyncPerson = asyncComponent(() => {
//   return import('../Components/Person/Person')
// });

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth: false,
    }
    console.log('in app' , this.props)
  }

  handleRoute = (event) => {
    console.log('handle route' ,this.props)
    this.props.history.push({
        pathname : '/'
    })
  }

  render() {
    console.log('render' , this.props)
  
    return (


    <Router>
      <div className='App'>
        <AppBar color='primary' position='sticky'>
          <Toolbar>
            <Typography>
              <img src={logo} className="App-logo" alt="logo" />
              <NavLink to="/" exact  activeClassName='my-active' activeStyle={{color : 'black'}}><Button variant='flat'>Welcome</Button></NavLink>
              <NavLink to="/person" activeClassName='my-active' activeStyle={{color : 'black'}}><Button  variant='flat'>Person</Button></NavLink>
              <NavLink to="/Login" activeClassName='my-active' activeStyle={{color : 'black'}}><Button variant='flat'>Login</Button></NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Switch>
          {/* {this.state.auth ?<Route path="/Login" component={Login} /> : null} */}
          <Route path="/"  exact component={Welcome} />
          <Route path="/person" component={Person}/>
          <Route path="/person/:id" component={Person}  />
          <Route path="/Login" component={Login} />
          <Route path="/LoggedIn" component={LoggedIn} />
          <Route render={()=> <h1 className='App-intro'>Page Not Found</h1>}/>
          {/* <Redirect from="/" to="/Login" /> */}
        </Switch>
      </div>
    </Router>
  
    );
    
  }
}

export default App;
