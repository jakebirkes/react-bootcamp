export const SpeedTypingReducer = (state, action) => {
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				start: !state.start,
			};
		case 'END_GAME':
			return {
				...state,
				start: !state.start,
			};
		case 'STORE_TEXT':
			const numWords = action.payload
				.trim()
				.split(' ')
				.filter(word => word !== '').length;
			return {
				...state,
				text: action.payload,
				count: numWords,
			};
		default:
			console.error('SpeedTypingReducer: INVALID ACTION', action.type);
	}
};
