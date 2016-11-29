import React from 'react';
import './App.css';

const App = () => (
	<div className="app">
		<div className="app-header">
			<h1>Red Ant Front-end Challenge</h1>
			<p className="mb-0">- Mimi Lau</p>
		</div>
		<div className="container">
			<div className="row app-intro">
				<div className="col-sm-6 text-sm-right">
					<h2 className="app-intro--heading">Print GitHub Users</h2>
				</div>
				<div className="col-sm-6 text-sm-left">
					<ul>
						<li>Use API <code>https://api.github.com/users</code></li>
						<li>Sort by user ID</li>
						<li>Filtering</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);


export default App;
