import React, {PropTypes} from 'react';

const User = (props) => {
	const user = props.user;

	return (
		<li className="col-lg-3 col-md-4 col-sm-6 mb-3">
			<div className="user__img text-xs-center">
				<a
					href={user.html_url}
					rel="noopener noreferrer"
					target="_blank"
					className="user__link"
				>
					<img
						src={user.avatar_url}
						role="presentation"
						className="rounded-circle w-100"
						alt={user.login}
					/>
					{
						user.site_admin ? <span className="tag tag-success user__img-tag">admin</span> : null
					}
				</a>
			</div>
			<div className="user__info text-xs-center rounded">
				<h2 className="h5">
					<span className="small font-italic text-muted">#{user.id}</span> {user.login}
				</h2>
				<p className="user__type">
					{user.type}
				</p>
			</div>
		</li>
	);
};

User.propTypes = {
	user: PropTypes.object
};

export default User;
