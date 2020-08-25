import React, {Component} from 'react';
import { CardList } from './Components/Card-list/Card-list-component';
import { Search } from './Components/Search-Box/search-box-component';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchbox : ''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }   
  handle = e => {
    this.setState({searchbox: e.target.value})
  };
  render() {
    const {monsters,searchbox}=this.state;
    const filter=monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchbox.toLowerCase()))

    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <Search placeholder="search Monsters" 
                  handle  ={this.handle} />
        <CardList monsters={filter} /> 
      </div>
    );
  }
}

export default App;
