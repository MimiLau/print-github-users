import React from 'react';
import './Intro.css';

const App = () => (
	<div className="app">
		<div className="app-header text-xs-center">
			<h1>Red Ant Front-end Challenge</h1>
			<p className="mb-0">- Mimi Lau</p>
		</div>
		<div className="container">
			<div className="row app-intro">
				<div className="col-sm-6 text-sm-right">
					<h2 className="app-intro__heading">Print GitHub Users</h2>
				</div>
				<div className="col-sm-6 text-sm-left">
					<ul>
						<li>Read API <code>https://api.github.com/users</code></li>
						<li>Sort by user ID ascendingly or descendingly</li>
						<li>User Type filtering</li>
					</ul>
					<ul>
						<li>Build with ReactJS.</li>
						<li>In the help of <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">creat-an-app</a>, eslint, Bootstrap</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);


export default App;
