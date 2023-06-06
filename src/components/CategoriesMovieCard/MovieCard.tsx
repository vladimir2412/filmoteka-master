import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useWatchlist } from '../../hooks/useWatchlist';
import { IMovieCard } from '../../types/types';
import Rating from '../MovieCard/Rating';
import WishlistIcon from '../MovieCard/WishlistIcon';
interface IMovie {
	movie: IMovieCard;
}

const MovieCard = ({ movie }: IMovie) => {
	const { toggleWatchlist } = useActions();
	const { watchlist } = useWatchlist();
	const isExist = watchlist.some((m: IMovieCard) => m.id === movie.id);

	const img_url = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
	const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : '';

	return (
		<>
			<div className="relative">
				<Link to={`/${movie.id}`} className="flex flex-col gap-2 cursor-pointer w-[212px]">
					<div className="relative">
						<img src={img_url} alt={movie.title} className="w-[212px] rounded-lg" />
						<div className="absolute bottom-0 right-0">
							<Rating vote={movie.vote_average} />
						</div>
					</div>
					<div className="flex flex-col text-white hover:underline hover:underline-offset-2">
						<h1 className="font-bold">{movie.title}</h1>
					</div>
				</Link>
				<div
					onClick={() => toggleWatchlist(movie)}
					className="absolute top-3 right-[10px] w-[1.6rem] h-[1.6rem]"
				>
					<WishlistIcon isExist={isExist} />
				</div>
				<p className="font-normal text-stone-400">{releaseYear}</p>
			</div>
		</>
	);
};

export default MovieCard;
