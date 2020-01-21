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
		<form className="content settings"
			onSubmit={handleFormSubmit}>
			<label>First Name:</label>
			<input onChange={e => setFirstName(e.target.value)} />
			<label>Last Name:</label>
			<input onChange={ e => setLastName(e.target.value)}/>
			<label>Email:</label>
			<input onChange={ e => setEmail(e.target.value)}/>
			<button type="submit" >Submit</button>
		</form>
	);
}

Settings.defaultProps = {
	handleSubmit: () => {},
}

Settings.propTypes = {
	handleSubmit: PropTypes.func,
}
