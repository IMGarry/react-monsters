import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state ={
      monsters: [],
      searchField : ""
    }
    // this.handleChange = this.handleChange.bind(this)
    this.handle2 = this.handle1.bind(this) 
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      console.log(users)
      this.setState({monsters:users}
        )
      })
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  handle1() {
    console.log('1 clicked')
  }
  
  handle3 = () => {
    console.log('3 clicked')
  }

  render () {
    const {monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

  return (
    <div className="App">
      
      <header className="App-header">
       <h1 className="rolodex">Mohsters Rolodex</h1> 
      <SearchBox
      placeholder='search monster'
      handleChange={this.handleChange}
      />  
      <CardList monsters={filteredMonsters} />
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        

        {/* <p>
          Edit <code>src/App.js</code> and save to reload!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      
    </div>
  );
  }
}

export default App;
