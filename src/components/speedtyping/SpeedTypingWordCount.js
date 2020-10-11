import React, { useContext } from 'react';
import { SpeedTypingContext } from '../../contexts/SpeedTypingContext';

const SpeedTypingWordCount = () => {
	const { count } = useContext(SpeedTypingContext);
	return (
		<div>
			<h3>
				Count: <span id="wordCount">{count || 0}</span> words
			</h3>
		</div>
	);
};

export default SpeedTypingWordCount;
