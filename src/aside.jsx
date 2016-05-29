import React from 'react';
import {Motion, spring, presets} from 'react-motion'

export default class Aside extends React.Component {
  /**
   * Get aside container calculated style
   * @param  {object} animatedValue new value each frame
   * @return {object} calculated style from the current frame value
   */
	getContainerStyle(animatedValue) {
		return {
		  top: 0,
		  left: 0,
		  position: 'fixed',
		  width: 250,
		  backgroundColor: this.toColor(animatedValue.color),
		  height: '100%'
		}
	}

  /**
   * Convert number to color
   * @param  {number} num
   * @return {string} rgba color
   */
	toColor(num) {
    return "rgba(155, 255, " + parseInt(num) + ", 1)";
	}

	render() {
    // Animate aside color from 0 to 255 when hide state change
		let animation ={
      color: this.props.hide ? spring(0): spring(255)
		}
		return (
      <Motion style={animation}>
      	{animatedValue =>
					<div style={this.getContainerStyle(animatedValue)}>
						<ul>
							<li>Home</li>
							<li>Products</li>
							<li>Sales channel</li>
							<li>About us</li>
						</ul>
					</div>
      	}
			</Motion>
		);
	}
}

Aside.propTypes = {
  /**
   * Whether to hide or show aside
   */
  hide: React.PropTypes.bool
}
