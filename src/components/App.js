import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
//Dynamic App
class App extends React.Component {
	state = { 
		test: 37,
		pageHeader: "Naming Contest with state"
	};
	componentDidMount() {
		// console.log('did Mount');
		// debugger;
	}
	componentWillUnmount() {
		// console.log('will unmount')
		// debugger;
	}
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader}/>
				<div>
					{this.state.test}
					{this.props.contests.map(contest => 
						<ContestPreview {...contest} />
					)}
					
				</div>
			</div>
		);
	}
}

//instead of this stateless App
// const App = () => {
// 	return (
// 		<div className="App">
// 			<Header message="Naming Contest"/>
// 			<div>
// 				...
// 			</div>
// 		</div>
		
// 	);
// };

export default App;

