import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
	state = { 
		test: 37,
		pageHeader: "Naming Contest with state",
		contests: this.props.initialContests
	};
	componentDidMount() {
		
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


export default App;

