import React, {Component} from 'react';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: []
		};
	}

	render() {
		const user = this.props.user;
		return (
			<li className="col-md-3 col-sm-4 mb-2">
				<div className="user--img text-xs-center">
					<img
						src={user.avatar_url}
						role="presentation"
						className="rounded-circle img-fluid"
						alt={user.login}
					/>
					{
						user.site_admin ? <span className="tag tag-success user--img-tag">admin</span> : null
					}
				</div>
				<div className="user--info text-xs-center rounded">
					<h2 className="h5">{user.login}</h2>
					<div className="row">
						<div className="col-xs-4 r-line">
							{user.type}
						</div>
						<div className="col-xs-4 r-line">
							#{user.id}
						</div>
						<div className="col-xs-4">
							<a href={user.html_url}>
								<i className="fa fa-github  fa-lg" aria-hidden="true"/>
							</a>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default User;
