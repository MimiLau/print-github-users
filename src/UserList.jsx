import React, {Component} from 'react';
import $ from 'jquery';
import _filter from 'lodash/filter';

import User from './User';

import './UserList.css';

class UserList extends Component {
	constructor(props) {
		super(props);

		this.onFilterClick = this.onFilterClick.bind(this);
		this.onDeleteFilterClick = this.onDeleteFilterClick.bind(this);

		this.state = {
			users: [],
			filterType: null
		};
	}

	componentDidMount() {
		this.getUserList();
	}

	onFilterClick(e) {
		const filterType = e.target.name;
		this.setState({
			filterType: filterType
		});
	}

	onDeleteFilterClick() {
		this.setState({
			filterType: null
		});
	}

	getUserList() {
		return $.getJSON('https://api.github.com/users').then((data) => {
			this.setState({
				users: data
			});
		});
	}

	render() {
		let users = this.state.users;

		if (this.state.filterType) {
			users = _filter(this.state.users, {'type': this.state.filterType});
		}

		let rows = users.map((user) =>
			<User
				key={user.id}
				user={user}
			/>
		);

		return (
			<div className="container">
				<div className="py-3">
					Filter:
					<div className="btn-group ml-1 mr-1" role="group">
						<button type="button" className="btn btn-secondary" onClick={this.onDeleteFilterClick} name="all">All</button>
						<button type="button" className="btn btn-secondary" onClick={this.onFilterClick} name="User">User</button>
						<button type="button" className="btn btn-secondary" onClick={this.onFilterClick} name="Organization">Organization</button>
					</div>
					No. of Results: {users.length}
				</div>
				<ul className="row ui-list">
					{rows}
				</ul>
			</div>
		);
	}
}

export default UserList;
