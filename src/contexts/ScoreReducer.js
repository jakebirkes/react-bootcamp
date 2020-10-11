export const ScoreReducer = (state, action) => {
	switch (action.type) {
		// During the game, store text and word count
		case 'STORE_TEXT':
			const str = action.payload || '';
			const num = str
				.trim()
				.split(' ')
				.filter(word => word !== '').length;
			return {
				...state,
				text: action.payload,
				wordCount: num,
			};
		// At the end of the game, store word count total
		case 'STORE_COUNT':
			const lastCount = state.wordCount || 0;
			return {
				...state,
				prevCount: lastCount,
				text: '',
				wordCount: 0,
			};
		default:
			console.error('ScoreReducer: INVALID ACTION', action.type);
	}
};
