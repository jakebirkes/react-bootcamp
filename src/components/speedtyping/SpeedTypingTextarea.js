import React, { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { ScoreContext } from '../../contexts/ScoreContext';

const SpeedTypingTextarea = () => {
	const { start } = useContext(TimerContext);
	const { text, storeText } = useContext(ScoreContext);

	const handleChange = e => {
		const { value } = e.target || '';
		storeText(value);
	};

	return (
		<>
			<textarea disabled={!start} onChange={handleChange} value={text || ''} />
		</>
	);
};

export default SpeedTypingTextarea;
