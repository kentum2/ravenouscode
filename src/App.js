import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from "./components/BusinessList/BusinessList"
import SearchBar from "./components/SearchBar/SearchBar"
import Yelp from "./util/Yelp"

class App extends Component {
  constructor (name) {
    super(name);
    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp (term, location, sortBy) {
    Yelp.search (term, location, sortBy).then (businesses => {
      
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Buscomida</h1>
          <SearchBar searchEngine={this.searchYelp}/>
          <BusinessList input={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
