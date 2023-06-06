import Navbar from '../../components/NavbarMain/Navbar';
import { useWatchlist } from '../../hooks/useWatchlist';
import { ICard } from '../../types/types';
import WatchlistCard from '../../components/Watchlist/WatchlistCard';

const Watchlist = () => {
	const { watchlist } = useWatchlist();
	return (
		<div className="relative">
			<div
				className="absolute inset-0 top-20 right-4 mx-5 blur-3xl bg-gradient-to-tr from-neutral-950 to-neutral-900 "
				style={{ zIndex: -1 }}
			/>
			<div className="px-14 pt-24">
				<Navbar />
				<div className="text-yellow-400 font-semibold underline underline-offset-8">
					Your watchlist
				</div>
				<div className="flex flex-wrap justify-center gap-x-8 gap-y-5 mt-5">
					{watchlist.map((card: ICard) => (
						<WatchlistCard key={card.id} card={card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Watchlist;
