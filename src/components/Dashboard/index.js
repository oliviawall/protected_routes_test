import React from 'react';
import {Link, Route, Router} from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
    
      <h1>Dashboard</h1>
    
      <p>Secret Page</p>

      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  )
};

export default Dashboard;