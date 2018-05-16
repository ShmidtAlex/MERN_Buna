import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';
//use API on serverside instead of this line:
//import data from '../testData';

//Dynamic App//
class App extends React.Component {
	state = { 
		test: 37,
		pageHeader: "Naming Contest with state",
		contests:[]
	};
	componentDidMount() {
		axios.get('/api/contests')
			.then(resp => {
				this.setState({
					contests: resp.data.contests
				});
			})
		.catch(console.error);
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
					
					{this.state.contests.map(contest => 
						<ContestPreview key={contest.id}{...contest} />
					)}
					
				</div>
			</div>
		);
	}
}

//for rendering empty array before data fetcing, replace this:
//{this.props.contests.map(contest => 
//on this:
//{this.state.contests.map(contest => 
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

