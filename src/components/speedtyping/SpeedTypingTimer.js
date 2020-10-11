import React, { useContext } from 'react';
import useTimer from '../../hooks/useTimer';
import { TimerContext } from '../../contexts/TimerContext';

const SpeedTypingTimer = () => {
	const { start, keepTime, time } = useContext(TimerContext);
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
