import React from 'react';
import ReactDOM from 'react-dom';

//we can use any js variable
const number = Math.random();
//manage style property
const color = number > 0.5 ? "green" : "red";
//component is just a function
const App = (props) => {
	return (
		<h2 style={{color:color,textAlign:"center"}} >
			{props.headerMessage}
			//commenting doesn't matters here it'll be wisible
			// Hello, React with COMPONENTS!!! { number }
		</h2>
	);
};
App.propTypes ={
	headerMessage: React.PropTypes.string.isRequired
}
App.defaultProps = {
	headerMessage: "Hello, I'm default value of porps"
}
ReactDOM.render(
	<App />,
	document.getElementById('root')
);