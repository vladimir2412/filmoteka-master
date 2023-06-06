import { useSelector } from 'react-redux';
export const useWatchlist = () => {
	const { watchlist } = useSelector((state) => state);
	return { watchlist };
};
