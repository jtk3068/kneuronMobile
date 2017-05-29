import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Login from './Login';
import Home from './Home';
import Signup from './SignUp';
import Profile from './Profile';
import NavBar from './NavBar';
<<<<<<< HEAD
import Lecture from './Lecture';
=======
import LiveLecture from './LiveLecture';
>>>>>>> [Feat]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dispatch, errorMessage, isAuthenticated } = this.props;
    return (
      <Router>
        <Scene key="root" >
          <Scene key="login" component={Login} title="Login Bitches" isAuthenticated={isAuthenticated} errorMessage={errorMessage} dispatch={dispatch} initial />
          <Scene key="home" component={Home} title="Fucking Work" />
          <Scene key="signup" component={Signup} title="Fucking Work you fuck" />
          <Scene key="profile" component={Profile} title="Profile Page" />
          <Scene key="navbar" component={NavBar} title="Nav" dispatch={dispatch} />
          <Scene key="livelecture" component={LiveLecture} title="LiveLecture" />
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default connect(mapStateToProps)(App);
