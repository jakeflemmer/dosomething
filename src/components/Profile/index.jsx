import React from 'react';
import PropTypes from 'prop-types';

export function Profile({ children }) {

	return (
		<div className="content">
			<header>
				<h1>Profile Info</h1>
			</header>
			<main>
				<ul>
					<li>First Name : <span>{children[0]}</span></li>
					<li>Last Name : <span>{children[1]}</span></li>
					<li>Email : <span>{children[2]}</span></li>
				</ul>
			</main>
		</div>
	)
}

Profile.propTypes = {
	children: PropTypes.node.isRequired,
}
