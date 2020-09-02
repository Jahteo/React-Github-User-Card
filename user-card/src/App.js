import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard";
import FriendCards from "./components/FriendCards";
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/jahteo")
      .then(res => {
        console.log("jahteo res.data", res.data)
        //avatar_url, created_at, followers, followers_url, following, following_url, html_url (userlink), login, name, id
        this.setState({user: res.data});
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/jahteo/followers")
      .then(res => {
        console.log("friends res.data", res.data)
        //avatar_url, created_at, followers, followers_url, following, following_url, html_url (userlink), login, name, id
        this.setState({friends: res.data});
      })
      .catch(err => console.log(err));
  }ß



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Github St@lker</h1>
        <input type="text" placeholder="future searchbar"/>
        <button>Find Target</button>
        {/* Target awol here (error msg) */}
        </header>
        <div className="App-container" >
        {/* <div style={{ backgroundColor: '#cfe8fc', height: '100vh' }}  > */}
          <Container maxWidth="md" style={{padding: "5% 0 0 0"}}>
            <UserCard user={this.state.user}/>
            <FriendCards friends={this.state.friends} />
          </Container>
        </div>

      </div>
    );
  }
}


export default App;
