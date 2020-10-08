import React, { useContext } from 'react';
import { SpeedTypingContext } from '../../contexts/SpeedTypingContext';

const SpeedTypingTextarea = () => {
	const { start, storeText, text } = useContext(SpeedTypingContext);

	const handleChange = e => {
		const { value } = e.target;
		storeText(value);
	};

	return <textarea disabled={!start} onChange={handleChange} value={text || ''} />;
};

export default SpeedTypingTextarea;
