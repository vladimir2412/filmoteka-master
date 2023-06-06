import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import MovieCard from '../MovieCard/MovieCard';
import { IMovieCard } from '../../types/types';
import 'swiper/css';
import 'swiper/css/navigation';

const MovieListCarousel = ({ data }) => {
	return (
		<div className="mt-3">
			<Swiper
				className="select-none"
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView={6}
				slidesPerGroup={5}
				navigation
			>
				{data?.results.map((movie: IMovieCard) => (
					<SwiperSlide key={movie.id}>
						<MovieCard movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MovieListCarousel;
