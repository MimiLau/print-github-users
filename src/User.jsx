import React, {Component, PropTypes} from 'react';

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
			<li className="col-md-3 col-sm-4 mb-3">
				<div className="user--img text-xs-center">
					<a
						href={user.html_url}
						rel="noopener noreferrer"
						target="_blank"
						className="user--link"
					>
						<img
							src={user.avatar_url}
							role="presentation"
							className="rounded-circle img-fluid"
							alt={user.login}
						/>
					</a>
					{
						user.site_admin ? <span className="tag tag-success user--img-tag">admin</span> : null
					}
				</div>
				<div className="user--info text-xs-center rounded">
					<h2 className="h5">
						<span className="small">#{user.id}</span> {user.login}
					</h2>
					<div>
						{user.type}
					</div>
				</div>
			</li>
		);
	}
}

User.propTypes = {
	user: PropTypes.object
};

export default User;
