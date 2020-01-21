import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import art from './art.jpg';

export function Landing({ handleLogin, isLoggedIn }) {

	return (
					<div className="landing">
						<header>
							<h1>Just Do Something</h1>
						</header>
						<main>
							<img src={art} alt="active stick figures"/>  
						</main>
						<nav role="navigation">
							<Link to="/activity/recreational"><button>DO SOMETHING</button></Link>
						</nav>
						<footer>
							<button onClick={handleLogin}>{ isLoggedIn ? 'LOG OUT' : 'LOG IN' }</button>
						</footer>
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
