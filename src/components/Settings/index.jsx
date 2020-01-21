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
			<input 
				placeholder="FIRST NAME"
				onChange={e => setFirstName(e.target.value)} />
			<input 
				placeholder="LAST NAME"
				onChange={ e => setLastName(e.target.value)}/>
			<input 
				type="email"
				placeholder="EMAIL"
				onChange={ e => setEmail(e.target.value)}/>
			<button type="submit" >SUBMIT</button>
		</form>
	);
}

Settings.defaultProps = {
	handleSubmit: () => {},
}

Settings.propTypes = {
	handleSubmit: PropTypes.func,
}
