import React, { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';

const SpeedTypingTextarea = () => {
	const { wordCount, prevCount } = useContext(ScoreContext);
	return (
		<>
			<p>
				<strong>Score:</strong>
				<span> {wordCount || 0} wpm</span>
			</p>
			<p>
				<strong>Previous:</strong>
				<span> {prevCount || 0} wpm</span>
			</p>
		</>
	);
};

export default SpeedTypingTextarea;
