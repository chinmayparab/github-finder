import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  render() {
    const sad = "sadness";

    const foo = () => "foo";

    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github'></Navbar>
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
        <h1>Learn React {sad + foo().toUpperCase()}</h1>
      </div>
    );
  }
}

export default App;
