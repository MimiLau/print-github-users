import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserList from './UserList';
import './index.css';

ReactDOM.render(
	<div>
		<App />
		<UserList />
	</div>,
	window.document.getElementById('root')
);
