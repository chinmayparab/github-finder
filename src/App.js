import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    const sad = "sadness";

    const foo = () => "foo";

    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github'></Navbar>
        <div className='container'>
          <Users></Users>
        </div>
        <h1>Learn React {sad + foo().toUpperCase()}</h1>
      </div>
    );
  }
}

export default App;
