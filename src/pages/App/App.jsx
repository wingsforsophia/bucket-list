import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import Home from '../Home/Home'
import Profile from "../Profile/Profile"
import ViewTrips from '../Trips/ViewTrips/ViewTrips'
import AddTrips from '../Trips/AddTrips/AddTrips'
import Messages from '../Messages/Messages'

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (<Home />)}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
       <Route 
          exact path='/profile'
          render={() => 
            <Profile  
              user={this.state.user} />
              }
            /> 
            <Route 
          exact path='/addtrip'
          render={() => 
            <AddTrips 
              user={this.state.user} />
              }
            /> 
          <Route 
          exact path='/trips'
          render={() => 
            <ViewTrips 
              user={this.state.user} />
              }
            />
            <Route 
            exact path='/messages'
            render={() => <Messages />}
            />

      </>
    );
  }
}

export default App;
