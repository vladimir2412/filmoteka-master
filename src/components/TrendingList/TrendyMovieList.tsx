import { useGetTrendingMoviesQuery } from '../../store/api/movie.api';
import MovieListCarousel from '../Carousel/MovieListCarousel';

const TrendyMovieList = () => {
	const { data } = useGetTrendingMoviesQuery(null);
	return (
		<div className="mt-14 mx-12">
			<span className="text-white font-semibold text-2xl">Now Trending</span>
			<MovieListCarousel data={data} />
		</div>
	);
};
export default TrendyMovieList;
