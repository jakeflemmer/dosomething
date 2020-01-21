import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

const boredUrl = 'https://www.boredapi.com/api/activity';

export function Activity({ match }) {

	const [ boredData, setBoredData ] = useState({ activity: '', type: '', participants: '' });
	const [ type, setType ] = useState('recreational');

	useEffect(() => {
		async function fetchData() {
			const result = await fetch(`${boredUrl}?type=${match.params.type}`);
			const json = await result.json();
			setBoredData(json);
		}
		fetchData();
	}, [ match.params.type ]);

	return (
		<div className="content">
			<p>Activity : {boredData.activity}</p>
			<p>Type : {boredData.type}</p>
			<p>Participants : {boredData.participants}</p>
		</div>
	)
}

Activity.propTypes = {
	match: PropTypes.object.isRequired,
}
