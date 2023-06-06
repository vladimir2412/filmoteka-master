import { createSlice } from '@reduxjs/toolkit';
import { IMovieCard } from '../../types/types';
const initialState: [] = [];

export const watchlistSlice = createSlice({
	name: 'watchlist',
	initialState,
	reducers: {
		toggleWatchlist: (state, action) => {
			const movie = action.payload;
			const isExist = state.some((m: IMovieCard) => m.id === movie.id);
			if (isExist) {
				const index = state.findIndex((item: IMovieCard) => item.id === movie.id);
				if (index !== -1) {
					state.splice(index, 1);
				}
			} else state.push(movie);
		},
	},
});

export const { actions, reducer } = watchlistSlice;
