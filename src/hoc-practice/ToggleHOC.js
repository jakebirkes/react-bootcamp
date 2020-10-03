import React, { Component } from 'react';
import TestHOC from './TestHOC';
import { withPointlessHOC, withExtraPropAdded } from './HOC';

class ToggleHOC extends Component {
	state = {
		show: false,
		liked: false,
	};

	toggleShow = () => {
		this.setState(prevState => {
			return {
				show: !prevState.show,
			};
		});
	};

	toggleLiked = () => {
		this.setState(prevState => {
			return {
				liked: !prevState.liked,
			};
		});
	};

	render() {
		const PointlessHOC = withPointlessHOC(TestHOC);
		const ExtraPropAdded = withExtraPropAdded(TestHOC, 12); // adding favorite number here

		const ComponentToggled = this.state.show ? ExtraPropAdded : PointlessHOC;

		return (
			<>
				<button
					onClick={this.toggleShow}
					style={{
						color: '#fff',
						background: '#333',
						border: '#eee',
						borderRadius: '7.5px',
						padding: '7.5px',
						fontWeight: '600',
					}}>
					{this.state.show ? 'Hide' : 'Show'} extra props added
				</button>
				{ComponentToggled()}
				<button onClick={this.toggleLiked} style={{ background: 'none', border: 'none' }}>
					<span
						aria-label="emoji"
						role="img"
						style={{ opacity: this.state.liked ? '100%' : '50%' }}>
						❤️
					</span>
					<span>{this.state.liked ? 'Liked!' : ''}</span>
				</button>
			</>
		);
	}
}

export default ToggleHOC;
