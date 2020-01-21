import React from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from './SubMenu';

export function SideMenu() {
	return (
			<ul className="nav">
				<hr />
				<SubMenu label="Activities" >
					<li><Link to="/activity/recreational">Recreational</Link></li>
					<li><Link to="/activity/cooking">Cooking</Link></li>
				</SubMenu>
				<hr />
				<SubMenu label="Account" >
					<li><Link to="/profile">Profile</Link></li>
					<li><Link to="/settings">Settings</Link></li>
				</SubMenu>
				<hr />
			</ul>
	)
}
