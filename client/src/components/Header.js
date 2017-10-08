import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {


	renderContent() {
		switch (this.props.auth) {
		  case null:
		    return 'Still deciding';
		  case false:
		    return 'im loggedout';
		  default:
		    return `hello ${this.props.auth.name}`;
		}
	}

	render() {
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}

}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);