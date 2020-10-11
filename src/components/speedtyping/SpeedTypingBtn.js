import React, { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { ScoreContext } from '../../contexts/ScoreContext';

const SpeedTypingBtn = () => {
	const { startGame, start } = useContext(TimerContext);
	const { storeCount } = useContext(ScoreContext);

	const begin = () => {
		storeCount();
		startGame();
	};

	return (
		<div>
			<button disabled={start} onClick={() => begin()}>
				Start
			</button>
		</div>
	);
};

export default SpeedTypingBtn;
