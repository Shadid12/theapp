import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA-hsMbqnISHio8T5IRHLFCf3kVw-d1K4E';



class Searchbar extends Component {

	constructor(props) {
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      		this.setState({ videos });
    	});
	}

	render() {
		return(
			<div>
				<input></input>
				<button>Search</button>
			</div>
		)
	}
}

export default Searchbar;