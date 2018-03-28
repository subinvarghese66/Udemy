import React, { Component } from 'react';
import {robots} from '../components/robots.js';
import SearchBox from '../components/SearchBox.js';
import CardArray from '../components/CardArray.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import 'tachyons';
class App extends Component {
  constructor(){
      super();
      this.state = {
        robots : [],
        searchfield : ''
      }
    }
  onSearchChange = (event) =>{
      this.setState({searchfield : event.target.value }) 
    };
  componentDidMount() {
    //this.setState({robots : robots});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});

  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
   return  !robots.length ? 
        <div className="tc">
          <p id="font"> Loading... </p>
        </div>
      :
       <div className="tc">
          <h1 id="font"> ROBOT FRIENDS </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardArray robots={filteredRobots}/>
          </Scroll>
        </div>
  }
}
export default App;