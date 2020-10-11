import React, { useContext } from 'react';
import useTimer from '../../hooks/useTimer';
import { SpeedTypingContext } from '../../contexts/SpeedTypingContext';

const SpeedTypingTimer = () => {
	const { start, keepTime, time } = useContext(SpeedTypingContext);
	useTimer(start, keepTime, time);

	return (
		<div>
			<h2>
				Time Remaining: <span id="timeRemaining">{time}</span> seconds
			</h2>
		</div>
	);
};

export default SpeedTypingTimer;
