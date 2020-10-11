export const TimerReducer = (state, action) => {
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
		default:
			console.error('TimerReducer: INVALID ACTION', action.type);
	}
};
