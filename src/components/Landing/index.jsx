import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import art from './art.jpg';

export function Landing({ handleLogin, isLoggedIn }) {

	return (
					<div className="landing">
						<img src={art}/>
						<Link to="/activity/recreational"><button>DO SOMETHING</button></Link>
						<button onClick={handleLogin}>{ isLoggedIn ? 'LOG OUT' : 'LOG IN' }</button>
					</div>
				);
}

Landing.defaultProps = {
	isLoggedIn: false,
}

Landing.propTypes = {
	handleLogin: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool,
};
