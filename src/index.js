import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';



const API_KEY = 'AIzaSyDt8393Bc1PvBh0xndN-MtiDZBU1E43qxg';


// Create a new component. This component should produce 
// some HTML
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}




// Take this component's generated HTML and put it
// on the page (in the DOM)


App
ReactDOM.render(<App />, document.querySelector('.container'));
