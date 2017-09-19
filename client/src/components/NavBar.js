import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import Home from './components';
// import About from './components';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'red',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
  </nav>

)



export default NavBar;