import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>Red Ant Front-end Challenge</h1>
          <p>- Mimi Lau</p>
        </div>
        <div className="row app-intro">
			<div className="col-sm-6 text-sm-right">
				<h2 className="app-intro--heading">Print GitHub Users</h2>
			</div>
			<div className="col-sm-6 text-sm-left">
				<ul>
					<li>Using API <code>https://api.github.com/users</code></li>
					<li>Sort by user ID</li>
					<li>Filtering</li>
				</ul>
			</div>
        </div>
      </div>
    );
  }
}

export default App;
