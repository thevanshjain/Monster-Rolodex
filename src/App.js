import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster : []
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monster.map(mon =>
          <h1 key={mon.id}>{mon.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
