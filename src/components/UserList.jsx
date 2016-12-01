import React, {Component} from 'react';
import $ from 'jquery';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';

import User from '../components/User';
import Loading from '../components/Loading';

import '../style/user-list.css';

class UserList extends Component {
	constructor(props) {
		super(props);

		this.onFilterClick = this.onFilterClick.bind(this);
		this.onSortClick = this.onSortClick.bind(this);
		this.onDeleteFilterClick = this.onDeleteFilterClick.bind(this);
		this.onSearchInputChange = this.onSearchInputChange.bind(this);

		this.state = {
			users: [],
			filterType: null,
			reverseSorting: false,
			searchString: ''
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

	onSearchInputChange(e) {
		this.setState({
			searchString: e.target.value
		});
	}

	getUserList() {
		return $.getJSON('https://api.github.com/users').then((data) => {
			this.setState({
				users: data
			});
		});
	}

	getFilteredUser(filtereUsers) {
		// list the users
		let rows = filtereUsers.map((user) =>
			<User
				key={user.id}
				user={user}
			/>
		);

		if (filtereUsers.length !== 0) {
			return (
				<ul className="row ui-list">
					{rows}
				</ul>
			);
		} else return (<p className="my-3 text-xs-center"><i className="fa fa-meh-o" /> No results.</p>);
	}

	render() {
		// users order by ID
		let filtereUsers = _sortBy(this.state.users, ['id']);
		let searchString = this.state.searchString.trim().toLowerCase();

		// filter the results
		if (this.state.filterType) {
			filtereUsers = _filter(filtereUsers, {'type': this.state.filterType});
		}

		// search the results.
		if (searchString.length > 0) {
			filtereUsers = filtereUsers.filter(obj => obj.login.match(searchString));
		}

		// sort by ID reversely
		if (this.state.reverseSorting) {
			filtereUsers = filtereUsers.reverse();
		}

		return (
			<main className="container">
				<div className="py-3">
					<div className="btn-toolbar" role="toolbar">
						<div className="btn-group mb-1" role="group">
							<button
								type="button"
								className={`btn btn-secondary ${!this.state.filterType ? 'active' : ''}`}
								onClick={this.onDeleteFilterClick}
							>
								All Type
							</button>
							<button
								type="button"
								className={`btn btn-secondary ${this.state.filterType === 'User' ? 'active' : ''}`}
								onClick={this.onFilterClick}
								name="User"
							>
								User
							</button>
							<button
								type="button"
								className={`btn btn-secondary ${this.state.filterType === 'Organization' ? 'active' : ''}`}
								onClick={this.onFilterClick} name="Organization"
							>
								Organization
							</button>
						</div>
						<button type="button" className="btn btn-secondary mb-1 float-md-left" onClick={this.onSortClick} name="all">
							{this.state.reverseSorting ? 'Desc' : 'Asc'}
						</button>
						<div className="form-group input--user-search">
							<label htmlFor="searchUserInput" className="sr-only">Search</label>
							<input
								type="text"
								value={this.state.searchString}
								onChange={this.onSearchInputChange}
								placeholder="Search name"
								id="searchUserInput"
								className="form-control"
							/>
						</div>
						<p className="float-sm-right ml-1 text--result">
							{filtereUsers.length} results
						</p>
					</div>
				</div>
				{this.state.users.length === 0 ?
					<Loading /> : this.getFilteredUser(filtereUsers)
				}
			</main>
		);
	}
}

export default UserList;
