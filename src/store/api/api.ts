import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
	}),
	endpoints: (builder) => ({
		getTrendingMovies: builder.query({
			query: () => `/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
	}),
});
