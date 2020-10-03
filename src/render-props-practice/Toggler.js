import React, { Component } from 'react';

class Toggler extends Component {
	state = {
		on: this.props.defaultOnValue,
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
		return (
			<div className="render-props">
				<p>This is using a 'Render Props' technique</p>
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
					{this.state.show ? 'Hide' : 'Show'} extra props added using 'Render Props'
				</button>
				{this.props.render(this.state.show, 7)}
				<button onClick={this.toggleLiked} style={{ background: 'none', border: 'none' }}>
					<span
						aria-label="emoji"
						role="img"
						style={{ opacity: this.state.liked ? '100%' : '50%' }}>
						❤️
					</span>
					<span>{this.state.liked ? 'Liked!' : ''}</span>
				</button>
			</div>
		);
	}
}

export default Toggler;
