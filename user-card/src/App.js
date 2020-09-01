import React from 'react';
import axios from "axios";
import UserCard from "./components/UserCard"
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
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Github St@lker</h1>
        <input type="text" placeholder="future searchbar"/>
        <button>Find Target</button>
        Target awol here
        <UserCard user={this.state.user}/>
        cards.
        </header>
      </div>
    );
  }
}


export default App;
