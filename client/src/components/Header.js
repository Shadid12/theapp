import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Searchbar from './Searchbar'

class Header extends Component {


	renderContent() {
		switch (this.props.auth) {
		  case null:
		    return 'Still deciding';
		  case false:
		    return (
		    	<div>
		    	 <a href="/auth/google">Login Mosseur</a>
		    	</div>
		    );
		  default:
		    return (
		    	<div>
			    	<span>hello, {this.props.auth.name}</span> || 
			    	<a href="/api/logout">Log Out</a>
			    	<br />
			    	<Searchbar />
		    	</div>
		    );
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