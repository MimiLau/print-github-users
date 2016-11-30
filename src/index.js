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
				<p>Fork the <a href="https://github.com/MimiLau/redant-challenge">repository</a>. <code>npm install</code> and <code>npm start</code></p>
				<p className="mb-0">Build with LOVE.</p>
			</div>
		</footer>
	</div>,
	window.document.getElementById('root')
);
