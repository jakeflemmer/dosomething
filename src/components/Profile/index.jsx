import React from 'react';
import PropTypes from 'prop-types';

export function Profile({ children }) {

	return (
		<ul className="content">
			<li>First Name : <span>{children[0]}</span></li>
			<li>Last Name : <span>{children[1]}</span></li>
			<li>Email : <span>{children[2]}</span></li>
		</ul>
	)
}

Profile.propTypes = {
	children: PropTypes.node.isRequired,
}
