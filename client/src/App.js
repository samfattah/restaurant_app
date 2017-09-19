import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Menu from './components/Menu';
import './App.css';

const App = () => (
  <div>
  <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/menu" component={Menu} />

      {/* NOTHING BELOW THIS */}
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
