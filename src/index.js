import data from './testData';
//console.log(data);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
//function for checking if componentWillUnmount works
// setTimeout(() => {
// 	ReactDOM.render(
// 		// this element will mounted istead of <App /> element, meanwhile App will be unmounted
// 		<h2>some h2</h2>,
// 		document.getElementById('root')
// 	)
// }, 4000);