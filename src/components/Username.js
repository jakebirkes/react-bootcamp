import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Username = () => {
	const { addUsername, username } = useContext(AppContext);
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
};

export default Username;
