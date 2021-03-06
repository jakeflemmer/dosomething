import React from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from './SubMenu';
import logo from './logo.jpg';

export function SideMenu() {
	return (
			<div className="navMenu">
				<nav>
					<Link to="/" className="logo"><img src={logo} alt="active logo"/></Link> 
					<ul className="navMenu">
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
				</nav>
			</div>
	)
}
