import React, {Component} from 'react';
import $ from 'jquery';

import User from './User';

import './UserList.css';

class UserList extends Component {
	constructor(props) {
		super(props);

		this.onFilterClick = this.onFilterClick.bind(this);
		this.state = {
			person: [],
			filterType: 'all'
		};
	}

	componentDidMount() {
		this.getUserList();
	}

	getUserList() {
		return $.getJSON('https://api.github.com/users').then((data) => {
			this.setState({ person: data });
		});
	}

	onFilterClick(type) {
		console.log(this.state.person.length);
		console.log(type);
		this.setState({
			filterType: type
		});
	}

	render() {
		const persons = this.state.person.map((user) =>
			<User
				key={user.id}
				user={user}
			/>
		);

		return (
			<div className="container">
				<div className="py-3">
					Filter:
					<div className="btn-group ml-1" role="group">
						<button type="button" className="btn btn-secondary" onClick={this.onFilterClick}>All</button>
						<button type="button" className="btn btn-secondary" onClick={this.onFilterClick}>User</button>
						<button type="button" className="btn btn-secondary">Organization</button>
					</div>
				</div>
				<ul className="row ui-list">
					{persons}
				</ul>
			</div>
		);
	}
}

export default UserList;
