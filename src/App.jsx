import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/beers" exact component={ListBeers} />
            <Route path="/random-beer" exact component={RandomBeer} />
            <Route path="/new-beer" exact component={NewBeer} />
            <Route path="/beers/:id" exact component={SingleBeer} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
