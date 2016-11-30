import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import UserList from './UserList';
import './index.css';

ReactDOM.render(
	<div>
		<Intro />
		<UserList />
		<footer className="text-muted">
			<div className="container">
				<p className="float-md-left">Fork the <a href="https://github.com/MimiLau/redant-challenge">repository</a>. <code>npm install</code> and <code>npm start</code></p>
				<p className="mb-0 float-md-right">Built with LOVE.</p>
			</div>
		</footer>
	</div>,
	window.document.getElementById('root')
);
