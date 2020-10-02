import React, { Component } from 'react';
import TestHOC from './TestHOC';
import { withPointlessHOC, withExtraPropAdded } from './HOC';

class ToggleHOC extends Component {
	state = {
		show: true,
	};

	toggleShow = () => {
		this.setState(prevState => {
			return {
				show: !prevState.show,
			};
		});
	};

	render() {
		const PointlessHOC = withPointlessHOC(TestHOC);
		const ExtraPropAdded = withExtraPropAdded(TestHOC, 12); // adding favorite number here

		const ComponentToggled = this.state.show ? PointlessHOC : ExtraPropAdded;

		return (
			<>
				<button onClick={this.toggleShow}>
					{this.state.show ? 'Hide' : 'Show'} ExtraPropAdded{' '}
				</button>
				{ComponentToggled()}
			</>
		);
	}
}

export default ToggleHOC;
