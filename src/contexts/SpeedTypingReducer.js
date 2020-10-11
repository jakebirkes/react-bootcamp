export const SpeedTypingReducer = (state, action) => {
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				start: true,
			};
		case 'KEEP_TIME':
			if (action.payload) {
				const countdown = state.time - 1;
				return {
					...state,
					time: countdown,
				};
			} else {
				return {
					...state,
					time: 60,
					text: null,
					start: false,
				};
			}
		case 'STORE_TEXT':
			let numWords = action.payload || '';
			numWords = numWords
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
