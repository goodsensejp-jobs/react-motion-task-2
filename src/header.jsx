import React from 'react';
var goodsenseLogo = require('./goodsense-logo.svg');

export default class Header extends React.Component {

  /** Outer dev container style */
  getContainerStyle() {
    return {
      height: 60,
      backgroundColor: '#0197A7',
      width: '100%'
    }
  }

  /** Inner dev container style */
  getInnerContainerStyle() {
    return {
      padding: 10,
      display: 'flex'
    }
  }

  /** Logo dev container style */
  getLogoStyle() {
    return {
      marginLeft: 20,
    };
  }

  /** Right menu style */
  getMenuIconStyle() {
    return {
      marginTop: 9,
      marginLeft: 10,
      cursor: 'pointer',
      fontSize: 20,
      color: '#FFF'
    }
  }

  render() {
    return (
      <div style={this.getContainerStyle()}>
        <div style={this.getInnerContainerStyle()}>
          <div style={this.getMenuIconStyle()} onClick={this.props.onMenuIconClick}>
            <i className="fa fa-bars" />
          </div>
          <div style={this.getLogoStyle()}>
            <img src={goodsenseLogo} height="40" />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  /**
   * Right menu click event handler
   */
  onMenuIconClick: React.PropTypes.func
};
