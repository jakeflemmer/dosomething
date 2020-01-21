import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Settings({ handleSubmit }) {
	
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const handleFormSubmit = e => {
		const values = { firstName, lastName, email };
		handleSubmit(values);
		e.preventDefault();
	}

	return (
		<div className="content">
			<header>
				<h1>Settings</h1>
			</header>
			<main>
				<form 
					onSubmit={handleFormSubmit}>
					<input 
						aria-label="first name"
						placeholder="FIRST NAME"
						onChange={e => setFirstName(e.target.value)} />
					<input 
						aria-label="last name"
						placeholder="LAST NAME"
						onChange={ e => setLastName(e.target.value)}/>
					<input 
						aria-label="email"
						type="email"
						placeholder="EMAIL"
						onChange={ e => setEmail(e.target.value)}/>
					<button type="submit" >SUBMIT</button>
				</form>
			</main>
		</div>
	);
}

Settings.defaultProps = {
	handleSubmit: () => {},
}

Settings.propTypes = {
	handleSubmit: PropTypes.func,
}
