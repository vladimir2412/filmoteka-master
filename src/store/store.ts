import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import { reducer as watchlistReduser } from './watchlist/watchlist.slice';
// import { reducer as currentPageReducer } from './currentPage/currentPage.slice';

const reducers = combineReducers({
	watchlist: watchlistReduser,
	[api.reducerPath]: api.reducer,
	// switchPages: currentPageReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
