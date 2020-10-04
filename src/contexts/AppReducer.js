export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				darkTheme: !state.darkTheme,
			};
		case 'ADD_USERNAME':
			return {
				...state,
				username: action.payload,
			};
		default:
			console.error('AppReducer: Invalid Action Type');
	}
};
