import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Settings } from '../Settings';
import { Profile } from '../Profile';

export function Account({ isAuth }) {

	const [ values, setValues ] = useState({ firstName: '', lastName: '', email: '' });

	return (
		<>
			<Route
				path="/profile"
				render={() => 
					<Profile>
						{values['firstName']}
						{values['lastName']}
						{values['email']}
					</Profile>
				}
			/>
			<Route 
				path="/settings" 
				render={() => isAuth ? <Settings handleSubmit={setValues}/> : <Redirect to="/" />}
			/>
		</>
	);
}

Account.defaultProps = {
	isAuth: false,
};

Account.propTypes = {
	isAuth: PropTypes.bool,
};
