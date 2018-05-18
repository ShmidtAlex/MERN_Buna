import React from 'react';
//we can use any js variable
const number = Math.random();
//manage style property
const color = number > 0.5 ? "green" : "red";
//component is just a function
const Header = ({message}) => {
	return (
		<h2 style={{color:color,textAlign:"center"}} className="Header text-center">
			{message} <br/>
		</h2>
	);
};
Header.propTypes ={
	message: React.PropTypes.string.isRequired
}
Header.defaultProps = {
	message: "Hello, I'm default value of porps"
}
export default Header;