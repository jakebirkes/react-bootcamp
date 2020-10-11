import React, { useState, useContext } from 'react';
import { SpeedTypingContext } from '../../contexts/SpeedTypingContext';

const SpeedTypingTextarea = () => {
	const { start } = useContext(SpeedTypingContext);
	const [wordCount, storeWordCount] = useState(0);
	const [text, storeText] = useState('');

	const handleChange = e => {
		const { value } = e.target;
		if (value !== text) {
			let str = value || '';
			let num = str
				.trim()
				.split(' ')
				.filter(word => word !== '').length;
			storeText(value);
			storeWordCount(num);
		}
	};

	return (
		<>
			<h3>
				Count: <span id="wordCount">{wordCount || 0}</span> words
			</h3>
			<textarea disabled={!start} onChange={handleChange} value={text || ''} />
		</>
	);
};

export default SpeedTypingTextarea;
