import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';

class App extends React.Component{

	render(){
		return(
			<Main />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
