import { IMovieCard } from '../../types/types';
import SearchItem from '../SearchItem/SearchItem';
import { Link } from 'react-router-dom';
interface IProps {
	data: {
		results: IMovieCard[];
	};
	handleClear: () => void;
}
const SearchResult = ({ data, handleClear }: IProps) => {
	return (
		<>
			<div className="absolute right-0 w-full bg-gray-100 top-[32px] flex flex-col h-[500px] overflow-auto  rounded-b-xl">
				{data?.results?.map((item: IMovieCard) => (
					<Link onClick={handleClear} to={`/${item.id}`} key={item.id} className="flex gap-y-4">
						<SearchItem item={item} />
					</Link>
				))}
			</div>
		</>
	);
};

export default SearchResult;
