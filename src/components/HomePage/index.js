import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = props => {
  return (
    <div>
      <h1>Home Page</h1>
      <p><Link to='/dashboard'>Dashboard</Link></p>
      <p>Logged in Status: {props.user}</p>
      <button onClick={props.handleLogin}>Log In</button>
    </div>
  )
};

export default HomePage;
