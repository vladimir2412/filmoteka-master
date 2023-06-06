import Rating from '../MovieCard/Rating';
import WishlistIcon from '../MovieCard/WishlistIcon';
import { useActions } from '../../hooks/useActions';
import { useWatchlist } from '../../hooks/useWatchlist';
import { ICard } from '../../types/types';
import { Link } from 'react-router-dom';

interface IWishCard {
	card: ICard;
}

const WatchlistCard = ({ card }: IWishCard) => {
	const { toggleWatchlist } = useActions();
	const { watchlist } = useWatchlist();

	const isExist = watchlist.some((c: ICard) => c.id === card.id);

	const img_url = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${card.poster_path}`;
	const releaseYear = card.release_date.slice(0, 4);

	return (
		<>
			<div className="relative">
				<Link to={`/${card.id}`} className="flex flex-col gap-2 max-w-[212px]">
					<div className="relative">
						<img src={img_url} alt={card.title} className="w-[212px] rounded-lg" />
						<div className="absolute bottom-0 right-0">
							<Rating vote={card.vote_average} />
						</div>
					</div>

					<div className="flex flex-col flex-wrap text-white">
						<h1 className="font-bold">{card.title}</h1>
					</div>
				</Link>
				<div
					onClick={() => toggleWatchlist(card)}
					className="absolute top-3 right-[10px] w-[1.6rem] h-[1.6rem]"
				>
					<WishlistIcon isExist={isExist} />
				</div>
				<p className="font-normal text-stone-400">{releaseYear}</p>
			</div>
		</>
	);
};

export default WatchlistCard;
