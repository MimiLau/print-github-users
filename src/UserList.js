import React, {Component} from 'react';
import $ from 'jquery';

class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: []
		};
	}

	componentDidMount() {
		this.UserList();
	}

	UserList() {
		return $.getJSON('https://api.github.com/users').then((data) => {
			this.setState({ person: data });
		});
	}

	render() {
		const persons = this.state.person.map((user, index) => {
			return (
				<li key={index} className="list-group-item">
					<div className="pseudo-table__cell">
						<img src={user.avatar_url} role="presentation" className="rounded-circle pull-xs-left" alt={user.login} width="150" height="150" />
						<h4>{user.login}</h4>
					</div>
					<div>
						<h2>{user.id} {user.login}</h2>
					</div>
					<p>{user.type}</p>
					<img src={user.avatar_url} role="presentation"/>
					<p>{user.url}</p>
				</li>
			);
		});

		return (
			<div id="layout-content" className="layout-content-wrapper">
				Filter:
				<button>All</button>
				<button>User</button>
				<button>Organization</button>
				<ul className="list-group">
					{persons}
				</ul>
			</div>
		);
	}
}

export default UserList;
