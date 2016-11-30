import React, {Component} from 'react';
import $ from 'jquery';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';

import User from './User';
import Loading from './Loading';

import './UserList.css';

class UserList extends Component {
	constructor(props) {
		super(props);

		this.onFilterClick = this.onFilterClick.bind(this);
		this.onSortClick = this.onSortClick.bind(this);
		this.onDeleteFilterClick = this.onDeleteFilterClick.bind(this);

		this.state = {
			users: [],
			filterType: null,
			reverseSorting: false
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

	onSortClick() {
		let isReverse = !this.state.reverseSorting;
		this.setState({
			reverseSorting: isReverse
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
		let users = _sortBy(this.state.users, ['id']);

		if (this.state.filterType) {
			users = _filter(this.state.users, {'type': this.state.filterType});
		}

		if (this.state.reverseSorting) {
			users = users.reverse();
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
					<div className="row">
						<div className="col-md-7 mb-1">
							Filter:
							<div className="btn-group ml-1" role="group">
								<button type="button" className={`btn btn-secondary ${!this.state.filterType ? 'active' : ''}`} onClick={this.onDeleteFilterClick}>All Type</button>
								<button type="button" className={`btn btn-secondary ${this.state.filterType === 'User' ? 'active' : ''}`} onClick={this.onFilterClick} name="User">User</button>
								<button type="button" className={`btn btn-secondary ${this.state.filterType === 'Organization' ? 'active' : ''}`} onClick={this.onFilterClick} name="Organization">Organization</button>
							</div>
						</div>
						<div className="col-md-5 mb-1 text-md-right">
							Sort by ID:
							<div className="btn-group ml-1" role="group">
								<button type="button" className="btn btn-secondary" onClick={this.onSortClick} name="all">
									{this.state.reverseSorting ? 'Desc' : 'Asc'}
								</button>
							</div>
						</div>
					</div>
					<div className="text-md-center">
						{users.length} results
					</div>
				</div>
				{this.state.users.length === 0 ?
					<Loading /> :
					<ul className="row ui-list">
						{rows}
					</ul>
				}
			</div>
		);
	}
}

export default UserList;
