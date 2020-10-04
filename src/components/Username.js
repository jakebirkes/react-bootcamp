// import React, { useContext } from 'react';
import React, { Component } from 'react';
import { AppContext } from '../contexts/AppContext';

class Username extends Component {
	static contextType = AppContext;
	render() {
		const { addUsername, username } = this.context;
		return (
			<div>
				<h2>{!username ? 'Hello!' : `Hello, ${username}!`}</h2>
				<form>
					<label>
						Name:{' '}
						<input
							type="text"
							name="name"
							placeholder="Add Your Name"
							onChange={event => addUsername(event.target.value)}
						/>
					</label>
				</form>
			</div>
		);
	}
}

// const Username = () => {
// 	const { addUsername, username } = useContext(AppContext);
// 	return (
// 		<div>
// 			<h2>{!username ? 'Hello!' : `Hello, ${username}!`}</h2>
// 			<form>
// 				<label>
// 					Name:{' '}
// 					<input
// 						type="text"
// 						name="name"
// 						placeholder="Add Your Name"
// 						onChange={event => addUsername(event.target.value)}
// 					/>
// 				</label>
// 			</form>
// 		</div>
// 	);
// };

export default Username;
