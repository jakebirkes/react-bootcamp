import React, { Component } from 'react';
import TestHOC from './TestHOC';
import { withPointlessHOC, withExtraPropAdded } from './HOC';

class ToggleHOC extends Component {
	state = {
		hide: true,
	};

	toggleShow = () => {
		this.setState(prevState => {
			return {
				hide: !prevState.hide,
			};
		});
	};

	render() {
		const PointlessHOC = withPointlessHOC(TestHOC);
		const ExtraPropAdded = withExtraPropAdded(TestHOC, 12); // adding favorite number here

		const ComponentToggled = this.state.hide ? PointlessHOC : ExtraPropAdded;

		return (
			<>
				<button onClick={this.toggleShow}>
					{this.state.hide ? 'Show' : 'Hide'} ExtraPropAdded
				</button>
				{ComponentToggled()}
			</>
		);
	}
}

export default ToggleHOC;
