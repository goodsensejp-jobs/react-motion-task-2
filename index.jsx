import React from 'react';
import ReactDOM from 'react-dom';
import Aside from './src/aside';

export class App extends React.Component {

	/**
	 * Reverse hide state every 2 seconds
	 */
	componentWillMount() {
		this.state = { hide: false };

		setInterval(() => {
			this.setState({ hide: !this.state.hide });
		}, 2000);
	}

	render() {
		return (
			<div>
				<Aside hide={this.state.hide} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
