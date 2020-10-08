export const SpeedTypingReducer = (state, action) => {
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				start: !state.start,
				timeRemaining: 60,
			};
		case 'COUNT_DOWN':
			return {
				...state,
				timeRemaining: state.timeRemaining - 1,
			};
		case 'END_GAME':
			return {
				...state,
				start: !state.start,
			};
		case 'STORE_TEXT':
			return {
				...state,
				text: action.payload,
			};
		default:
			console.error('SpeedTypingReducer: INVALID ACTION', action.type);
	}
};
