import React, { useContext, useEffect } from 'react';
import { SpeedTypingContext } from '../../contexts/SpeedTypingContext';

const SpeedTypingTimer = () => {
	const { endGame, countDown, timeRemaining } = useContext(SpeedTypingContext);

	useEffect(() => {
		if (timeRemaining > 0) {
			setTimeout(() => {
				countDown();
			}, 1000);
		} else {
			endGame();
		}
	}, [endGame, countDown, timeRemaining]);

	return (
		<div>
			<h2>Time Remaining: {timeRemaining || 60} seconds</h2>
		</div>
	);
};

export default SpeedTypingTimer;
