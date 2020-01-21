import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { Account } from './Account';
import { Activity } from './Activity';
import { Landing } from './Landing';
import './Main.css';

export function Main() {

		const [ isAuth, setIsAuth ] = useState(true);

		return(
			<Router>
				<div className="main">
					<Route 
					  exact path="/"
						render={() => <Landing handleLogin={ e => setIsAuth(!isAuth)} isLoggedIn={isAuth} />}
						/>
					<Route
						path="/:anything"
						component={SideMenu}
						/>
					<Route 
						path="/activity/:type"	
						component={Activity}
						/>
					<Account isAuth={isAuth}/>
				</div>
			</Router>
		);
}
