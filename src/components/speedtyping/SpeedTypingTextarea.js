import React, { useContext, useEffect, useRef } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { ScoreContext } from '../../contexts/ScoreContext';

const SpeedTypingTextarea = () => {
	const { start } = useContext(TimerContext);
	const { text, storeText } = useContext(ScoreContext);

	const textareaRef = useRef(null);

	useEffect(() => {
		if (start) {
			textareaRef.current.disabled = false;
			textareaRef.current.focus();
		}
	}, [start]);

	const handleChange = e => {
		const { value } = e.target || '';
		storeText(value);
	};

	return (
		<>
			<textarea ref={textareaRef} disabled={!start} onChange={handleChange} value={text || ''} />
		</>
	);
};

export default SpeedTypingTextarea;
