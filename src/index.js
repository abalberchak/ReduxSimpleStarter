import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDt8393Bc1PvBh0xndN-MtiDZBU1E43qxg';



// Create a new component. This component should produce 
// some HTML
class App extends Component {
  Constructior(props) {
    super(props);

	  this.state = { videos: [] };

	  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  		this.setState({ videos });
  		// this.setState ({ videos: videos })

		});
	}

	render() {
	  return (
			<div>
			  <SearchBar />
			</div>
		);	
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
