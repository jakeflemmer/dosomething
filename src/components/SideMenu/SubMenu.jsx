import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function SubMenu({ label, children }) {

	const [ isOpen, setOpen ] = useState(true);

	return (
		<ul 
			className="subMenu"
			onClick={() => setOpen(!isOpen)}
			>
			<li>{label}<span className="symbol">{ isOpen ? '-' : '+' }</span></li>
			{ isOpen &&
				React.Children.map(children, child => React.cloneElement(child, { onClick: e => e.stopPropagation(), className: 'subMenuItem' }))
			}
		</ul>
	);
}

SubMenu.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.node,
}
