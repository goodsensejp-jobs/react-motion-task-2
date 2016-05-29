import React from 'react';
import ReactDOM from 'react-dom';
import Aside from './src/aside';
import Header from './src/header';
import './src/base.css';

export class App extends React.Component {

	/**
	 * Set initial state
	 */
	componentWillMount() {
		this.state = { hide: true };
	}

  /**
   * Toggle hide state
   */
  toggleSideNav() {
    this.setState({ hide: !this.state.hide });
  }

	render() {
		return (
      <div>
        <Header onMenuIconClick={this.toggleSideNav.bind(this)} />
        <Aside hide={this.state.hide} />
      </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
