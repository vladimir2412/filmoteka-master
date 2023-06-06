import { api } from './api';

export const movieApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTopRatedMovies: builder.query({
			query: () => `/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getCategory: builder.query({
			query: () => `/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getUpcomingMovies: builder.query({
			query: () => `/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getMovieDetails: builder.query({
			query: (id) => `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getBilledCast: builder.query({
			query: (id) => `/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getRecommendations: builder.query({
			query: (id) => `/movie/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getMovieTrailers: builder.query({
			query: (id) => `/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`,
		}),
		getPopular: builder.query({
			query: () => `/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`,
		}),
		getSearch: builder.query({
			query: (searchValue) =>
				`/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchValue}`,
		}),
		getFilterByGenres: builder.query({
			query: (genresValue) =>
				`/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genresValue}`,
		}),
	}),
});
export const {
	useGetTrendingMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetCategoryQuery,
	useGetUpcomingMoviesQuery,
	useGetMovieDetailsQuery,
	useGetBilledCastQuery,
	useGetRecommendationsQuery,
	useGetMovieTrailersQuery,
	useGetPopularQuery,
	useGetSearchQuery,
	useGetFilterByGenresQuery,
} = movieApi;
