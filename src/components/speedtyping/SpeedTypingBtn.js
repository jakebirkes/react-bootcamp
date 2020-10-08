import React, { useContext } from 'react';
import { SpeedTypingContext } from '../../contexts/SpeedTypingContext';

const SpeedTypingBtn = () => {
	const { startGame, start } = useContext(SpeedTypingContext);
	console.log(start);
	return (
		<div>
			<button disabled={start} onClick={() => startGame}>
				Start
			</button>
		</div>
	);
};

export default SpeedTypingBtn;
