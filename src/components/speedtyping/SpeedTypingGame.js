import React from 'react';
import TimerContextProvider from '../../contexts/TimerContext';
import ScoreContextProvider from '../../contexts/ScoreContext';
import SpeedTypingTextarea from './SpeedTypingTextarea';
import SpeedTypingTimer from './SpeedTypingTimer';
import SpeedTypingBtn from './SpeedTypingBtn';
import SpeedTypingScore from './SpeedTypingScore';

const SpeedTypingGame = () => (
	<div id="SpeedTypingWrapper">
		<h1>Speed Typing Game</h1>
		<p>How many words can you type in one minute?</p>
		<TimerContextProvider>
			<ScoreContextProvider>
				<SpeedTypingScore />
				<SpeedTypingTimer />
				<SpeedTypingBtn />
				<SpeedTypingTextarea />
			</ScoreContextProvider>
		</TimerContextProvider>
	</div>
);

export default SpeedTypingGame;
