import React from 'react';
import SpeedTypingContextProvider from '../../contexts/SpeedTypingContext';
import SpeedTypingTextarea from './SpeedTypingTextarea';
import SpeedTypingTimer from './SpeedTypingTimer';
import SpeedTypingBtn from './SpeedTypingBtn';

const SpeedTypingGame = () => (
	<SpeedTypingContextProvider>
		<div id="SpeedTypingWrapper">
			<h1>Speed Typing Game</h1>
			<p>How fast can you type?</p>
			<SpeedTypingTextarea />
			<SpeedTypingTimer />
			<SpeedTypingBtn />
		</div>
	</SpeedTypingContextProvider>
);

export default SpeedTypingGame;
